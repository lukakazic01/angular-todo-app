
import { Component, OnInit } from '@angular/core';
import { ITodo } from './todo-list';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'todo-app';
  input: string = "";
  todoList: ITodo[] = [];
  index: number = 0;

  addNewTodo():void {
    if(this.input === '')
     return;
    this.todoList.push({text: this.input, completed: false})
    this.input = ''
  }

  deleteTodo(todo: ITodo):void {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  completedTodo(todo: ITodo):void  {
     this.todoList = [...this.todoList]
  }

  ngOnInit():void {
    this.todoList = JSON.parse(localStorage.getItem('todo') || '[]') 
  }
}