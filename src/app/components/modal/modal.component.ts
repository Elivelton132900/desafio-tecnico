import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() mostrar!: boolean 

  ngOnInit(): void {
    if (this.mostrar) {
      this.toggle()
    }
  }

  mostrarModal = false



  toggle() {
    this.mostrarModal = !this.mostrarModal
  }
}
