import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form?: FormGroup;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      priority: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1), Validators.max(5)],
      }),
      startDate: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      endDate: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }



  ionViewWillEnter(){
    this.taskService.getTasks().subscribe()
    console.log(this.taskService.getData())
  }

  onCreateTask(){
    // console.log(this.form)
    this.taskService.saveTask(this. form?.value) .subscribe ()
    // method reset pour enlever les text formulaire automatiquement
    this.form?. reset ( )
  }

}



  // ionViewWillEnter(){
  //   this.taskService.saveTask({
  //     title: 'task title',
  //     description: 'task description',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     priority: 10
  //   }).subscribe()
  // }
