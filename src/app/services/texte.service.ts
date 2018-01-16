import { Injectable } from '@angular/core';
import { Texte } from '../classes/texte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TexteService {
    private textesUrl = 'http://127.0.0.1:8000/textes';
    constructor( private http: HttpClient ) { }

    getTextes(): Observable<Texte[]> {
        return this.http.get<Texte[]>(this.textesUrl);

    }
}
