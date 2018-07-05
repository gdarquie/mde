import { Component, OnInit } from '@angular/core';
import { Fiction } from '../../classes/fiction';
import { FictionService} from '../../services/fiction.service';
import { HttpClient } from '@angular/common/http';
import {ModalComponent} from '../modal/modal.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-fiction',
  templateUrl: './add-fiction.component.html',
  styleUrls: ['./add-fiction.component.css']
})
export class AddFictionComponent implements OnInit {

    fiction: Fiction;
    fictions: Fiction[];
    content: string;

    constructor(
      private http: HttpClient,
      private fictionService: FictionService,
      public dialogRef: MatDialogRef<ModalComponent>
    ) {}

    ngOnInit() {
        this.getFictions();
        console.log(this.fictions);
    }

    getFictions(): void {
      this.fictionService.getFictions()
        .subscribe(fictions => this.fictions = fictions.slice(0, 9));
    }

  /**
   *
   * @param {string} titre
   * @param {string} description
   */
    addFiction(titre: string, description: string): void {
        titre = titre.trim();
        description = description.trim();

        if (!description) { return; }
        this.fictionService.addFiction({ titre, description } as Fiction)
            .subscribe(fiction => {
                this.fictions.push(fiction);
            });
        this.dialogRef.close();
    }
}
