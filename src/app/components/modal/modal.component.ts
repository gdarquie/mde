import {Component} from '@angular/core';
import { Projet } from '../../classes/projet';
import { ProjetService} from '../../services/projet.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    closeResult: string;

    constructor(private modalService: NgbModal, private http: HttpClient, private projetService: ProjetService) {}

    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    addProjet(titre: string, description: string): void {
        titre = titre.trim();titre = titre.trim();
        description = description.trim();

        if (!description) { return; }
        this.projetService.addProjet({ titre, description } as Projet)
            .subscribe(projet => {
                this.projets.push(projet);
            });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
