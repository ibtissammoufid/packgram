import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../beans/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {

  offre: Offre = new Offre();

  constructor(private offreService: OffreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOffre(){
    this.offreService.createOffre(this.offre).subscribe( data =>{
      console.log(data);
      //this.goToOffreList();
    },
    error => console.log(error));
  }

  goToOffreList(){
    this.router.navigate(['/acceuil']);
  }
  
  onSubmit(){
    console.log(this.offre);
    this.saveOffre();
  }

}
