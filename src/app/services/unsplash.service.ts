import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createApi } from 'unsplash-js';
import { UnplashImage } from '../model/unplash_image.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private localStorageService: LocalStorageService) { }

  private static UNSPLASH_KEY: string = 'unsplashKey';

  /**
   * Récupère une image aléatoire d'Unsplash
   * S'il en existe déjà une dans le localstorage, elle est retournée
   * @returns Résultat de l'API d'Unsplash
   */
  async getRandomImg(): Promise<UnplashImage> {
    return new Promise<UnplashImage>((resolve, reject) => {
      const resultFromCache = this.localStorageService.getWithExpiry(UnsplashService.UNSPLASH_KEY);

      if (resultFromCache) {
        const unplashImg = this.transformAnyToUnsplashObject(resultFromCache)
        resolve(unplashImg);
      } else {
        const unsplash = createApi({ accessKey: environment.unsplash.token });
  
        unsplash.photos.getRandom({ count: 1, orientation: 'landscape', query: 'Landscape' })
          .then(result => {
            this.localStorageService.setWithExpiry(UnsplashService.UNSPLASH_KEY, result, 7200000); // 2 hours
            const unplashImg = this.transformAnyToUnsplashObject(result)
            resolve(unplashImg);
          })
          .catch(e => { reject(e) });
      }
    });
  }

  // TODO : prendre le temps de définir une interface ou un classe pour remplacer any par unknown
  private transformAnyToUnsplashObject(element: any): UnplashImage {
    console.log(element)
    const response = element.response[0];
    const url = response.links.download;
    const unsplashUrl = response.links.html;
    const authorName = response.user.name;
    const authorUrl = response.user.links.html.download;
    const description = response.description;

    return new UnplashImage(url, unsplashUrl,description, authorName, authorUrl);
  }
}
