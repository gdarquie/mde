import { Injectable } from '@angular/core';
import { Fiction } from '../classes/fiction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {AppSettings} from '../app-settings';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class FictionService {

    private fictionsUrl = AppSettings.API_ENDPOINT + '/fictions';

    constructor( private http: HttpClient ) {
        console.log(this.fictionsUrl);
    }

    getFiction(fictionId): Observable<Fiction> {
        return this.http.get<Fiction>(this.fictionsUrl + '/' + fictionId );
    }

    getFictions(): Observable<Fiction[]> {
        const token = AppSettings.TOKEN;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        return this.http.get<Fiction[]>(this.fictionsUrl, httpOptions)
            .pipe(
                catchError(this.handleError('getFictions', []))
        );
    }

    /** POST: add a fiction to the server */
    addFiction (fiction: Fiction): Observable<Fiction> {
        return this.http.post<Fiction>(this.fictionsUrl, fiction, httpOptions).pipe(
            catchError(this.handleError<Fiction>('addFiction'))
        );
    }

  /**
   * @param {Fiction} fiction
   * @returns {Observable<Fiction>}
   */
    putFiction(fiction: Fiction): Observable<Fiction> {
        return this.http.put<Fiction>(this.fictionsUrl + '/' + fiction.id, fiction, httpOptions).pipe(
            catchError(this.handleError<Fiction>('putFiction'))
        );
    }

    /**
     * @param fictionId
     */
    deleteFiction (fictionId): Observable<Fiction> {
        return this.http.delete<Fiction>(this.fictionsUrl + '/' + fictionId, httpOptions).pipe(
            catchError(this.handleError<Fiction>('deleteFiction'))
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
