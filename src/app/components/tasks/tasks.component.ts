import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }
  /// Removes the taks from the UI
  deleteItem(task: Task) {
    this.taskService.deleteItem(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }
  /// adds or remove reminder 
  toggleReminder(item: Task) {
    item.reminder = !item.reminder;
    this.taskService.updateItemReminder(item).subscribe();
  }
 /// adds new item 
  addItem(item) {
    this.taskService.addItem(item).subscribe((task) => (this.tasks.push(task)));
  }
} 
