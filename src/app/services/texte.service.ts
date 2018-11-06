import { Injectable } from '@angular/core';
import { Texte } from '../classes/texte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {AppSettings} from '../app-settings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class TexteService {

  private url = 'http://127.0.0.1:8000';
  private textesUrl = 'http://127.0.0.1:8000/textes';
  private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + AppSettings.TOKEN
        })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   *
   * @param texteId
   * @returns {Observable<Texte>}
   */
  getTexte(texteId): Observable<Texte> {
    return this.http.get<Texte>(this.textesUrl + '/' + texteId );
  }

  /** All textes for one fiction */
  getTextes(fictionId): Observable<Texte[]> {
      return this.http.get<Texte[]>(this.textesUrl + '/fiction/' + fictionId)
        .pipe(
          catchError(this.handleError('getTextes', []))
        );
  }

  /** POST: créer un texte */
  addTexte (texte: Texte): Observable<Texte> {
    return this.http.post<Texte>(this.textesUrl, texte, httpOptions).pipe(
      catchError(this.handleError<Texte>('addTexte'))
    );
  }

  /** PUT: mettre à jour un texte */
  putTexte (texte: Texte): Observable<Texte> {
    return this.http.put<Texte>(this.textesUrl + '/' + texte.id, texte, httpOptions).pipe(
      catchError(this.handleError<Texte>('putTexte'))
    );
  }

  /** DELETE: supprimer un texte */
  deleteTexte (texteId): Observable<Texte> {
    return this.http.delete<Texte>(this.textesUrl + '/' + texteId, httpOptions).pipe(
      catchError(this.handleError<Texte>('deleteTexte'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
