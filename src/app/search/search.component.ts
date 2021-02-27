import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../beans/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  offres: Offre[];

  constructor(private offreService: OffreService,
    private router: Router) { }

  ngOnInit(): void {
    //this.getOffres();
  }
/** 
  private getOffres(){
    this.offreService.getOffresList().subscribe(data => {
      this.offres = data;
    });
  }

 */

}
