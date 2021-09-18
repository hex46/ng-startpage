export class UnplashImage {

  constructor(private url: string,
    private unsplashUrl: string,
    private description: string,
    private authorName: string,
    private authorUrl: string) {}

    getUrl(): string {
      return this.url;
    }

    getUnsplashUrl(): string {
      return this.unsplashUrl;
    }
}