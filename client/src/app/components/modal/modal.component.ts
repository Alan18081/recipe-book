import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() title: string;
  @Output() saveChanges = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  @Output() leavePage = new EventEmitter();
  onSave(): void {
    this.saveChanges.emit();
  }
  onClose(): void {
    this.closeModal.emit();
  }
  onLeave(): void {
    this.leavePage.emit();
  }
}
