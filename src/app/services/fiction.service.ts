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
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDExNTE1NzgsImV4cCI6MTU0MTE1NTE3OCwicHNldWRvIjoiZ2FvdGlhbiJ9.VxnO6w7nV5qDxM9thUHoq0poId6M3Adxxtp43BxkRKpVFnYFTugBAA5KydPDxMqEYCQxOu25QJahlrDh6YuzwLiwXya8zckuYTRts3zzU8U5yYSSXVKoQ55qV4OxNVa5MW1ppObHDjNGCTL3FxAGYCeSFRfLkRINhrLxeAvXTsMy4vcqFznubtgdYehuVs4LGJxeYUKtLgJDDD4qEgkxuQz07xctjqQUuoWnnopUES8CKS3UXROiBT1XrwYoFhxQby-p-Kyu7NGsc0Yik0Pu1r350tJVxyI4_XV2i5BKFU_7uobQFFZmAdX4Y8Aebf3daCEP0vt0nBzvDgJMaZbxIB-esyuIBWtRsHBwHsvkFom67cX0_f7lAHe7uQLaFuTDPVqX2753ygpXZozXBn28F2oGZLxaKjjLsVdNgbrAoFXA4zXdSYfyfKgXd0NCZ0cwBWV40gDACdB_2hlBEcivQyMjx61EAv27u0SgCkrS5xVrKFi1igPlyddTa5S_vsPPsjNYrKnXfJgDAIate4ghPHI2B9NpOyDFkx9yLJhoBboLgRMHxkGtiJJHPShZr9vZXRZ23_i1rw2wiIDmJ3zWfVhmirczS0SaF08wU-xjST7XJTQ8HbQAofbZ8u5MpXA9P0HUO4d9wE30bArsS-3f84amBIT77Y6HS8y5Qhuj9Tk';
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
