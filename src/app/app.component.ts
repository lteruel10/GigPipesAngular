import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string='Capitán América';
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI:number=Math.PI;
  porcentaje:number=0.234;
  salario:number=1234.5;

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:'Loma Linda',
      casa:2000
    }
  }//heroe
  // pipe async  //Promise<string> resuelve un string la promesa
  valorPromesa=new Promise<string>( (resolve)=>{
    setTimeout(()=>{
      resolve("Llego la data");
    },4500);
  });

  //fechas
  fecha:Date=new Date();

}
