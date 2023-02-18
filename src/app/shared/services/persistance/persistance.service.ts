import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key:string, data:any){
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to local storage ", error);
    }
  }

  get(key:string): any{
    try {
      let value = localStorage.getItem(key);
      return value && JSON.parse(value);
    } catch (error) {
      console.error("Error getting data from local storage ", error);
      return null;
    }
  }
}
