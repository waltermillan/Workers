import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor() { }

  getShortFormattedDate(date: Date): string {
    const now = new Date(date);  // Aseguramos que `date` sea un objeto Date
    const year = now.getFullYear();  // Obtenemos el año
    const month = ("0" + (now.getMonth() + 1)).slice(-2);  // Obtenemos el mes (recuerda que empieza en 0)
    const day = ("0" + now.getDate()).slice(-2);  // Obtenemos el día y aseguramos que tenga 2 dígitos
  
    return `${year}-${month}-${day}`;  // Formato "yyyy-MM-dd"
  }
}