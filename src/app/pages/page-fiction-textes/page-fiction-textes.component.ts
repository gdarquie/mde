import {Component, Input, OnInit} from '@angular/core';
import {Texte} from '../../classes/texte';
import {FictionService} from '../../services/fiction.service';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TexteService} from '../../services/texte.service';
import {Fiction} from '../../classes/fiction';
import {ModalComponent} from '../../components/modal/modal.component';
import {MatDialog} from '@angular/material';
import {Personnage} from '../../classes/personnage';

@Component({
  selector: 'app-page-fiction-textes',
  templateUrl: './page-fiction-textes.component.html',
  styleUrls: ['./page-fiction-textes.component.css']
})
export class PageFictionTextesComponent implements OnInit {

  // @Input()fiction: Fiction;
  // @Input()fictionId: Fiction;

  fictionId: string;
  fiction: Fiction;
  textes: Texte[];
  texte: Texte;
  titreMenu = 'textes';

  constructor(
    private http: HttpClient,
    private fictionService: FictionService,
    private texteService: TexteService,
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getFictionId();
    this.getFiction(this.fictionId);
    this.getTextes(this.fictionId);
  }

  goBack(): void {
    this.location.back();
  }

  getFictionId(): void {
    this.route.params.subscribe(params => {
      return this.fictionId =  params['id'];
    });
  }

  /**
   * @param fictionId
   * @returns {object}
   */
  getFiction(fictionId): object {
    return this.fictionService.getFiction(fictionId)
      .subscribe(fiction => this.fiction = fiction);
  };

  /**
   * @param fictionId
   * @returns {object}
   */
  getTextes(fictionId): object {
    return this.texteService.getTextes(fictionId)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  /**
   * @param {Texte} texte
   */
  deleteTexte = function(texte: Texte): void {
    this.textes = this.textes.filter(t => t !== texte);
    this.texteService.deleteTexte(texte.id)
      .subscribe(textes => this.textes = textes.slice(0, 9));
  };

  // addTexte(titre: string, description: string, fiction: number ): void {
  //   titre = titre.trim();
  //   description = description.trim();
  //   if (!titre || !description) { return; }
  //   this.texteService.addTexte({ titre, description, fiction } as Texte)
  //     .subscribe(texte => {
  //       this.textes.push(texte);
  //     });
  // }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '650px',
      data: {
        titre: 'Ajout de texte',
        fictionId: this.fictionId,
        isAjoutTexte: true
      }
    });
  }

}
