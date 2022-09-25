import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() headers!: string[]
  @Input() items: any = []

  @Input() isDeleteOption = false
  @Output() deleteEvent = new EventEmitter<number>()


  delete(index: number) {
    this.deleteEvent.emit(index)
  }

}
