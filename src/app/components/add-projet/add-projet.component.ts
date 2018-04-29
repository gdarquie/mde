import { Component, OnInit } from '@angular/core';
import { Projet } from '../../classes/projet';
import { ProjetService} from '../../services/projet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

    projets: Projet[];
    content: string;

    options: Object = {
        editorClass: 'add-projet-description',
        placeholderText: 'Description du service',
        charCounterCount: true,
        events : {
            'froalaEditor.keypress' : function(e, editor) {
                if (editor.selection.get().anchorNode){
                    this.content = editor.selection.get().anchorNode.data;
                    console.log(this.content);
                }
            }
        }
    }


    constructor(private http: HttpClient, private projetService: ProjetService) {}

    ngOnInit() {
        console.log('Init', this.content);
    }

    getFormContent(){
        this.content = 'Récupération du contenu du form';
    }

    addProjet(titre: string, description: string): void {
        titre = titre.trim();
        description = description.trim();

        //quand je clique sur un bouton, je vois le contenu du champ
        // console.log('content =', $('div#froala-editor').froalaEditor('html.get'));
        if (!description) { return; }
        this.projetService.addProjet({ titre, description } as Projet)
            .subscribe(projet => {
                // this.projets.push(projet);
            });
    }
}
