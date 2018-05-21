import { Injectable } from '@angular/core';
import { Personnage } from '../classes/personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class PersonnageService {

    private personnagesUrl = 'http://127.0.0.1:8000/personnages';

    constructor( private http: HttpClient ) { }

    fictionId = 1;

    /** POST: ajouter un personnage */
    addPersonnage (personnage: Personnage): Observable<Personnage> {
        return this.http.post<Personnage>(this.personnagesUrl, personnage, httpOptions).pipe(
            catchError(this.handleError<Personnage>('addPersonnage'))
        );
    }

    /** DELETE: ajouter un personnage */
    deletePersonnage (personnageId): Observable<Personnage> {
        return this.http.delete<Personnage>(this.personnagesUrl + '/' + personnageId, httpOptions).pipe(
            catchError(this.handleError<Personnage>('deleteFiction'))
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
