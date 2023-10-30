import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTaskList:string = "";

  submitItemTaskList = () => {
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
