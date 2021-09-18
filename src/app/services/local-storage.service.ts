import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setWithExpiry(key: string, value: unknown, ttl: number) {
    const now = new Date();

    const item = {
      value: value,
      expiry: now.getTime() + ttl
    }

    localStorage.setItem(key, JSON.stringify(item));
  }

  getWithExpiry(key: string): unknown {
    const item = localStorage.getItem(key);

    if (!item) return null;

    const itemObject = JSON.parse(item);
    const now = new Date();

    if (now.getTime() > itemObject.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return itemObject.value;
  }
}
