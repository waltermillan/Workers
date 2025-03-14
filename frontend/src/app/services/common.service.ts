import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 

  }

  //Get the date in short format.
  getShortFormattedDate(date: Date): string {
    const now = new Date(date);
    const year = now.getFullYear(); 
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
  
    return `${year}-${month}-${day}`;
  }
}