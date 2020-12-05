import { Component, OnInit } from '@angular/core';
import { faCat, faDog, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';

import { Animal } from '../Animal';
import { AdopcionesDataService } from '../adopciones-data.service';

@Component({
  selector: 'adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.scss']
})
export class AdoptionListComponent implements OnInit {

  adopciones: Animal[] = [];
  faCat = faCat;
  faDog = faDog;
  faVenus = faVenus;
  faMars = faMars;

  constructor(private adopcionesDataService: AdopcionesDataService) {
  }

  ngOnInit(): void {
    this.adopcionesDataService.getAnimals()
      .subscribe(adopciones => this.adopciones = adopciones);
  }

}
