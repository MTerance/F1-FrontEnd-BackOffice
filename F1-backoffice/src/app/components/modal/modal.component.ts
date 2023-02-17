import { Component, Inject, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

@Injectable()
export class ModalComponent implements OnInit {

/*
  @Input() public modalConfig : ModalConfig;
  @ViewChild('modal') private modalContent : TemplateRef<ModalComponent>;  
  private modalRef: ModalRef;
*/
  constructor() { }

  ngOnInit(): void {
  }

  open() {
  }

  close() {

  }

  dismiss() {

  }

}
