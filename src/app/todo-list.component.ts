import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { ITodo } from "./todo-list";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss', './app.component.scss']
})
export class TodoListComponent implements OnChanges{


   @Input() todo!: ITodo;
   @Input() index!: number;
   @Input() todoList!: ITodo[];
   @Output() obrisiTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
   @Output() cekirajTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

   deleteTodo(todo: ITodo): void {
       this.obrisiTodo.emit(todo);
   }

   completedTodo(todo: ITodo): void {
     todo.completed = !todo.completed;
     this.cekirajTodo.emit(todo);
   }

   ngOnChanges(): void {
    localStorage.setItem('todo', JSON.stringify(this.todoList));
   }
}