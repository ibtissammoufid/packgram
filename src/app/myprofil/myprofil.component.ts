import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.css']
})
export class MyprofilComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  save(content) {
    this.modalService.open(content);
  }
  review(content) {
    this.modalService.open(content);
  }
  approve(content) {
    this.modalService.open(content);
  }
  reject(content) {
    this.modalService.open(content);
  }
  cancel(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
