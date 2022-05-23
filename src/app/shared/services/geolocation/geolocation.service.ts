import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getPosition(): Observable<GeolocationCoordinates> {
    return new Observable((emissor) => {
      const geolocation: Geolocation = navigator.geolocation;

      if (geolocation) {
        geolocation.getCurrentPosition((pos) => {
          emissor.next(pos.coords);
          emissor.complete();
        },
          (erro) => emissor.error(erro)
        );
      } else {
        emissor.error(new Error('Navegador não suporta geolocalização'));
      }
    });
  }
}
