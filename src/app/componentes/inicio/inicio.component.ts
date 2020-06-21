import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listado = [
    {imagen: "https://significadodeloscolores.info/wp-content/uploads/2015/06/color-gris.jpg",
    nombre: "Cuarto gris",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "¡Porque soy billonario!",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "Cuarto amueblado",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "Cuarto amueblado",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "Cuarto amueblado",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "Cuarto amueblado",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

    {imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "amueblado",
    precio: "2550",
    direccion: "https://goo.gl/maps/QTRDVHGuscHE7bG68",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"},

  ]

  propiedad = {
    imagen: "https://i.pinimg.com/originals/7b/04/3a/7b043ae96156bfc82881ef8419ed1ec8.jpg",
    nombre: "Cuarto amueblado",
    precio: "2550",
    direccion: "Vicente suarez #1 El Salto Jalisco",
    caracteristicas: [{pisos:1, cuartos: 1, baños: 1, cochera: 0 }],
    descripcion: "Cuarto amueblado, cálido y ¡sin insectos!, cama muy cómoda SpringAir"
  }

  constructor() { }

  ngOnInit() {
  }

  setValues(item){
    this.propiedad = {
      imagen: item.imagen ,
      nombre: item.nombre,
      precio: item.precio,
      direccion: item.direccion,
      caracteristicas: item.caracteristicas,
      descripcion: item.descripcion
    }
  }

  hola(){
    alert("hola")
  }

}
