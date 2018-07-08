import { Component, OnInit, Input, Inject } from '@angular/core';
import { Fiction } from '../../../classes/fiction';
import { FictionService } from '../../../services/fiction.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Location} from '@angular/common';
import {ModalComponent} from '../../modal/modal.component';

@Component({
  selector: 'app-edit-fiction',
  templateUrl: './edit-fiction.component.html',
  styleUrls: ['./edit-fiction.component.css']
})
export class EditFictionComponent implements OnInit {

  fictionId: string;
  fiction: Fiction;
  fictions: Fiction[];

  constructor(
    private fictionService: FictionService,
    private location: Location,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getFiction(this.data.fictionId);
  }

  /**
   * @param fictionId
   * @returns {object}
   */
  getFiction(fictionId): object {
    return this.fictionService.getFiction(fictionId)
      .subscribe(fiction => this.fiction = fiction);
  }

  editFiction(titre: string, description: string): void {
    const id = this.fiction.id;
    this.fictionService.putFiction({ id, titre, description } as Fiction)
      .subscribe(() => this.goBack());
    console.log('Edition réussie');
    this.dialogRef.close();
  }

  goBack(): void {
    this.location.back();
  }

}


