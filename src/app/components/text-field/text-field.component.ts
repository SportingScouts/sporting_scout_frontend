import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() value: string;
  @Input() name: string;
  @Input() type: string = 'text';
  @Input() placeholder: string;
  @Input() error: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
