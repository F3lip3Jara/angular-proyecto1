import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-ins-persona',
  templateUrl: './ins-persona.component.html',
  styleUrls: ['./ins-persona.component.css']
})
export class InsPersonaComponent implements OnInit {
personas: Persona[];
  constructor() { 
    this.personas = [];
  }

  ngOnInit() {
  }

  guardar(nombre:string, apellido:string):boolean{
    this.personas.push(new Persona(nombre,apellido));
    console.log(this.personas);
    return false;
   }
}
