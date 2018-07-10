import { Component, OnInit } from '@angular/core';
import {Fiction} from '../../classes/fiction';
import {FictionService} from '../../services/fiction.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-fiction-personnages',
  templateUrl: './page-fiction-personnages.component.html',
  styleUrls: ['./page-fiction-personnages.component.css']
})
export class PageFictionPersonnagesComponent implements OnInit {

  fictionId: string;
  fiction: Fiction;

  constructor(
    private route: ActivatedRoute,
    private fictionService: FictionService
  ) { }

  ngOnInit() {
    this.getFictionId();
    this.getFiction(this.fictionId);
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

}
