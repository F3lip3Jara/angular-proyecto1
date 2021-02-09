import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Persona } from '../model/persona.model';

@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.css']
})
export class CardPersonaComponent implements OnInit {

@Input() persona : Persona[];
@HostBinding('attr.class') cssClass = 'col-lg-3 col-md-6 mb-4';

  constructor() { }

  ngOnInit() {
  }
 
 

}
