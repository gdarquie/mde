import { Injectable } from '@angular/core';
import { Texte } from '../classes/texte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {Personnage} from "../classes/personnage";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class TexteService {

    private textesUrl = 'http://127.0.0.1:8000/textes';

    constructor( private http: HttpClient ) { }

    getTextes(): Observable<Texte[]> {
        return this.http.get<Texte[]>(this.textesUrl);
    }

    /** POST: add a texte */
    addTexte (texte: Texte): Observable<Texte> {
      return this.http.post<Texte>(this.textesUrl, texte, httpOptions).pipe(
        catchError(this.handleError<Texte>('addTexte'))
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
