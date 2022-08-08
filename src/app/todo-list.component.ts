import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "./todo-list";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss', './app.component.scss']
})
export class TodoListComponent {


   @Input() todo: ITodo = {text: '', completed: false}
   @Input() index: number | undefined;
 
   @Output() obrisi: EventEmitter<ITodo> = new EventEmitter<ITodo>()
   @Output() cekirajTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>()
   deleteTodo(todo: ITodo): void {
       this.obrisi.emit(todo)
   }

   completedTodo(todo: ITodo): void {
     todo.completed = !todo.completed
     this.cekirajTodo.emit(todo)
   }
}