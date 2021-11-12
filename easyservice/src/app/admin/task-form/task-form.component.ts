import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  tasks: Task[];
  task: Task[] = [];
  constructor(private _route: Router, private _taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }
  getAllTasks = () => {
    this._taskService.getAllTask().subscribe(
      (tasksList) => {
        this.tasks = tasksList;
        console.log(tasksList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
  onAddTask = (taskForm: NgForm) => {
    console.log(taskForm.value);
    this._taskService.addTask(taskForm.value).subscribe(
      (data: Task) => {
        //  console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
  onClick = () => {
    this._route.navigate(['/add']);
  };

  onClickUpdate = (task: Task) => {
    this._route.navigate(['add/update-task', task.taskId]);
  };

  onDeleteTask = (taskId: number) => {
    this._taskService.deleteTask(taskId).subscribe(
      () => console.log('Deleted'),
      (error) => console.log(error),
      () => console.log('completed')
    );
    this.getAllTasks();
  };
}
