import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  taskId: number;
  task: Task;

  constructor(
    private _taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.taskId = parseInt(map.get('id')))
    );

    this._taskService.getById(this.taskId).subscribe((response) => {
      this.task = response;
    });
  }

  onClick() {
    this._route.navigate(['/add/task-form']);
  }

  onUpdateTask = (taskForm: NgForm) => {
    this._taskService.updateTask(taskForm.value).subscribe(
      (data: Task) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
