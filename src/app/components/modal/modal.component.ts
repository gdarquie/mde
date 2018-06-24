import {Component} from '@angular/core';

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  titre: string = "Ajout d'une fiction";

  titre_texte = "mon titre";
  contenu_texte = "oui";
}
