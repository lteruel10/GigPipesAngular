import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
// transform(value: unknown, edad:number, activo:boolean, mensaje:string): string {
    // console.log(value);
    // console.log(edad,activo,mensaje);
// transform(value: unknown, ...args: unknown[]): string {
      // console.log(args);
      value=value.toLowerCase();
      let nombreCompleto=value.split(' ');

      if (todas){
        nombreCompleto=nombreCompleto.map(nombreMap=>{
          // los console son para ver como rayos fununcia el .map
          console.log('________________________',nombreMap);
          console.log('***********************',nombreMap.substr(1));
          console.log('------------------------',nombreMap[0].toUpperCase());
        return nombreMap[0].toUpperCase()+nombreMap.substr(1);
        })
 
      }else {
        nombreCompleto[0]=nombreCompleto[0][0].toUpperCase()+nombreCompleto[0].substr(1);
      }

    //  console.log(nombreCompleto.join(' '))
      return nombreCompleto.join(' ')
  
  }

}
