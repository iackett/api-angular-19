import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],// No importar HttpClient porque esta en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {
datos:any[] = [];//guardar los datos que se obtengandel servicio
  constructor( private servicio: ServiciopracticaService) { }
  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (data: any[]) => {
        this.datos = data;// renderiza y pinta en templeate
      });

  }// cierra ngOnInit
}// cierra clase