# Pipes

## pipe slice
* intaxis: nombre: slice:3 //quita los 3 primeros caracters
* intaxis: nombre: slice:0:5 //tomoa los 5 primeros caracters

## para que la fecha se ponga segun el area de la computadora...
en la terminal
* **https://angular.io/guide/i18n#i18n-pipes
* * * ng add @angular/localize
* ASI QUEDA EL  app.modules.ts (MAS FACIL QUE EL VIDEO XQ NO FUNUNCIA)
        import {LOCALE_ID, NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        ////para la fecha local 
        import '@angular/common/locales/global/es';

        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
