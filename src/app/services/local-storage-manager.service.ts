import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {

  getDatas(key: string): Array<any> {
    const datasBrut = localStorage.getItem(key);
    
    if (datasBrut == null) {
      return []
    }

    return JSON.parse(datasBrut);
  }

  setData(key: string, data: any) {
    // Persist (doit pouvoir persister une collection)
    localStorage.setItem(key, JSON.stringify(data))
  }
}
