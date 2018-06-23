import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Evenement} from '../classes/evenement';
import {Personnage} from "../classes/personnage";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class EvenementService {

  private evenementsUrl = 'http://127.0.0.1:8000/evenements';

  constructor( private http: HttpClient ) { }

  getEvenement(evenementId): Observable<Evenement> {
    return this.http.get<Evenement>(this.evenementsUrl + '/' + evenementId );
  }

  /** All evenements for one fiction */
  getEvenements(fictionId): Observable<Evenement[]> {
    console.log('get évènement');
    return this.http.get<Evenement[]>(this.evenementsUrl + '/fiction/' + fictionId)
      .pipe(
        catchError(this.handleError('getEvenements', []))
      );
  }

  /** POST: add a evenement hero to the server */
  addEvenement (evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.evenementsUrl, evenement, httpOptions).pipe(
      catchError(this.handleError<Evenement>('addEvenement'))
    );
  }

  putEvenement(evenement: Evenement): Observable<Evenement> {
    console.log('Modification');
    return this.http.put<Evenement>(this.evenementsUrl, evenement, httpOptions).pipe(
      catchError(this.handleError<Evenement>('putEvenement'))
    );
  }

  deleteEvenement (evenementId): Observable<Evenement> {
    return this.http.delete<Evenement>(this.evenementsUrl + '/' + evenementId, httpOptions).pipe(
      catchError(this.handleError<Evenement>('deleteEvenement'))
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
