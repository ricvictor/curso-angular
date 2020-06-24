import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Component1Service {

  constructor() { }

  getCursos(){
    return ['Java', 'Python', 'Angular'];
  }  
  
}
