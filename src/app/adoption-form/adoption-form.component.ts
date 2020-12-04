import { Component, OnInit } from '@angular/core';

import { Animal } from '../Animal';
import { Adoptante } from '../Adoptante';
import { AdopcionesDataService } from '../adopciones-data.service';
import { EnviarAdoptanteService } from '../enviar-adoptante.service';

@Component({
  selector: 'adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.scss']
})
export class AdoptionFormComponent implements OnInit {

  adopciones: Animal[] = [];

  adoptante: Adoptante = {
    nombre: null,
    email: null,
    animal: null
  };

  submitStatusMessage: String = null;

  constructor(private adopcionesDataService: AdopcionesDataService, private enviarAdoptanteService: EnviarAdoptanteService) {
  }

  ngOnInit(): void {
    this.adopcionesDataService.getAnimals()
      .subscribe(adopciones => this.adopciones = adopciones);
  }

  limpiarMensaje(): void {
    this.submitStatusMessage = null;
  }

  enviarSolicitud(event): void {
    event.preventDefault()
    this.enviarAdoptanteService.sendAdoptante(this.adoptante)
    .subscribe(() => {
      this.submitStatusMessage = "Se envió correctamente su solicitud de adopción";
      setTimeout(() => {
        this.limpiarMensaje();
      }, 5000);
    }, () => {
      this.submitStatusMessage = "Hubo un error, por favor intente nuevamente";
      setTimeout(() => {
        this.limpiarMensaje();
      }, 5000);
    });    
  }
}
