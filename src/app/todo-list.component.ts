import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "./todo-list";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
   @Input() todo: ITodo = {text: '', completed: false}

   @Output() obrisi: EventEmitter<ITodo> = new EventEmitter<ITodo>()

   deleteTodo(todo: ITodo): void {
       this.obrisi.emit(todo)
   }
}