
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

  addNewTodo() {
    this.todoList.push({text: this.input, completed: false})
    this.input = ''
    localStorage.setItem('todo', JSON.stringify(this.todoList))
  }

  deleteTodo(todo: ITodo){
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(this.todoList))
  }
  ngOnInit(): void {
    this.todoList = JSON.parse(localStorage.getItem('todo') || '[]') 
  }
}