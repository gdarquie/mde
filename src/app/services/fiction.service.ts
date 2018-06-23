import { Injectable } from '@angular/core';
import { Fiction } from '../classes/fiction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class FictionService {

    private fictionsUrl = 'http://127.0.0.1:8000/fictions';

    constructor( private http: HttpClient ) { }

    getFiction(fictionId): Observable<Fiction> {
        return this.http.get<Fiction>(this.fictionsUrl + '/' + fictionId );
    }

    getFictions(): Observable<Fiction[]> {
        return this.http.get<Fiction[]>(this.fictionsUrl)
            .pipe(
                catchError(this.handleError('getFictions', []))
        );
    }

    /** POST: add a fiction hero to the server */
    addFiction (fiction: Fiction): Observable<Fiction> {
        return this.http.post<Fiction>(this.fictionsUrl, fiction, httpOptions).pipe(
            catchError(this.handleError<Fiction>('addFiction'))
        );
    }

    putFiction(fiction: Fiction): Observable<Fiction> {
        console.log('Modification');
        return this.http.put<Fiction>(this.fictionsUrl, fiction, httpOptions).pipe(
            catchError(this.handleError<Fiction>('putFiction'))
        );
    }

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
