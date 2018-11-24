import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../classes/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private projetsUrl = environment.apiUrl + '/projets';
  private httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + environment.token
      })
  };

  constructor(
      private http: HttpClient
  ) { }

  /**
   *
   * @param projetId
   * @returns {Observable<Projet>}
   */
  getProjet(projetId): Observable<Projet> {
      return this.http.get<Projet>(this.projetsUrl + '/' + projetId);
  }
}
