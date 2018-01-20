import { Component, OnInit } from '@angular/core';
import { Texte } from '../../classes/texte';
import { TexteService} from '../../services/texte.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-textes',
  templateUrl: './textes.component.html',
  styleUrls: ['./textes.component.css']
})
export class TextesComponent implements OnInit {
    textes: Texte[];
    selectedTexte: Texte;

    constructor(private http: HttpClient, private texteService: TexteService) { }

    ngOnInit() {
        this.getTextes();
    }

    getTextes(): void {
        this.texteService.getTextes()
            .subscribe(textes => this.textes = textes.slice(1, 10));
    }

    onSelect(texte: Texte): void{
        this.selectedTexte = texte;
        console.log(this.selectedTexte.contenu);
    }

}
