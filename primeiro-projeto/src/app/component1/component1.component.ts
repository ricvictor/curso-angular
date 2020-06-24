import { Component, OnInit } from '@angular/core';
import { Component1Service } from './component1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.sass']
})
export class Component1Component implements OnInit {

  cursos: string[];

  constructor(private _component1Service: Component1Service) {
    
    this.cursos = this._component1Service.getCursos();
   
  }

  ngOnInit(): void {
  }

  /**
 * @param {string} target  The target to process
 * @returns Teste
 */
  textCompodoc(target){
    return target;
  }
}
