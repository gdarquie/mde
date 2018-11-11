import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Collection} from '../classes/collection';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

    private fictionsUrl = environment.apiUrl + '/fictions';

    constructor( private http: HttpClient ) { }

    getCollection(): Observable<Collection[]> {
        const token = environment.token;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        return this.http.get<Collection[]>(this.fictionsUrl, httpOptions)
            .pipe(
                catchError(this.handleError('getCollection', []))
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
