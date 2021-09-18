import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './services/unsplash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-startpage';
  unsplashUrl: string = '';

  constructor(private unsplaceService: UnsplashService) {}

  ngOnInit(): void {
    this.unsplaceService.getRandomImg()
      .then(result => {
        console.log(result)
        document.body.style.backgroundImage = `url('${result.getUrl()}')`
        this.unsplashUrl = result.getUnsplashUrl();
      }).catch(e => { console.error(e); })
  }
  
}
