import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck{

  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  setEmitTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  deleteTask = (event: number) => {
    this.taskList.splice(event, 1);
  }

  deleteAllTasks = () => {
    const confirm = window.confirm("Deseja realmente apagar toda a lista?")

    if(confirm) {
      this.taskList = [];
    }
  }

  validationInput(event: string, index: number) {
    if(!event.length){
      const confirm = window.confirm("Task vazia, deseja deletar?");

      if(confirm) {
        this.deleteTask(index);
      }
    }
  }

  setLocalStorage() {
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
