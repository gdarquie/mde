import { Component, OnInit } from '@angular/core';
import { Fiction } from '../../classes/fiction';
import { FictionService} from '../../services/fiction.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-fiction',
  templateUrl: './add-fiction.component.html',
  styleUrls: ['./add-fiction.component.css']
})
export class AddFictionComponent implements OnInit {

    fictions: Fiction[];
    content: string;

    constructor(private http: HttpClient, private fictionService: FictionService) {}

    ngOnInit() {
        console.log('Add fiction init lancé', this.content);
        console.log(this.fictions);
    }

    getFormContent() {
        this.content = 'Récupération du contenu du form';
    }

    addFiction(titre: string, description: string): void {
        titre = titre.trim();
        description = description.trim();

        // quand je clique sur un bouton, je vois le contenu du champ
        // console.log('content =', $('div#froala-editor'));
        if (!description) { return; }
        this.fictionService.addFiction({ titre, description } as Fiction)
            .subscribe(fiction => {
                this.fictions.push(fiction);
            });
        console.log('Ajout d\'une fiction');
        // console.log($('.modal.content'));
        // close modale
    }
}
