import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';
import { AdopcionesDataService } from '../adopciones-data.service';

@Component({
  selector: 'adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.scss']
})
export class AdoptionListComponent implements OnInit {

  adopciones: Animal[] = [];

  constructor(private adopcionesDataService: AdopcionesDataService) {
  }

  ngOnInit(): void {
    this.adopcionesDataService.getAnimals()
    .subscribe(adopciones => {
      this.adopciones = adopciones
      console.log(this.adopciones)
    });
  }

}
