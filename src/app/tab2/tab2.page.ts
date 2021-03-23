import { GitUserService } from './../git-service/git-user.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//Для приклада 4
import { interval,of,range } from 'rxjs';
import { filter, map,tap } from 'rxjs/operators';
//Приклад5
import { fromEvent, from,  } from 'rxjs';
import { debounceTime,  distinctUntilChanged, mergeMap, catchError } from 'rxjs/operators';
import {  ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

 subscription;
 subscription1;
 subscription2;
 counter=0;
 counter1=0;

  constructor() {}
  //Приклад1
ras()
{
  //почали стежити
  observable.subscribe(observer);
}
//Приклад2
ras1()
{
// просто логуємо кожне значення
this.subscription = timer.subscribe({ next: console.log });
this.counter++;
console.log ("Запустили потік номер "+this.counter);
}
stop1()
{
  this.subscription.unsubscribe();
  console.log ("Стоп потік номер "+this.counter);

}
//Приклад3
ras2()
{
// просто логуємо кожне значення
this.subscription1 = timer1.subscribe({ next: console.log });
this.counter1++;
console.log ("Запустили потік номер "+this.counter1);
}
stop2()
{
  this.subscription1.unsubscribe();
  console.log ("Стоп потік номер "+this.counter1);

}
//Приклад 4

ras3()
{
  this.subscription2 = timer2.subscribe({ next: console.log });
}
data = [];
ras3_1()
{
  obs.subscribe(
    val => {
      this.data.push(val)
      console.log(this.data)
    }
    )

  }
  //Приклад5
  @ViewChild('input', { static: true }) input: ElementRef;

  ras5()
  {
    let keyUp$=fromEvent(this.input.nativeElement, 'keyup')
    .subscribe({
      next: res => console.log(res)
    });
  }
  gitHubUsers:string[]=[];
  recordRepsToList = (reps) =>{
    this.gitHubUsers=[];
    console.log(reps);
    for (let i = 0; i < reps.length; i++)
    {
      this.gitHubUsers.push(reps[i]);
    }
  }
ras5_1()
{

  let gitUserService=new GitUserService();
  let user$=fromEvent(this.input.nativeElement, 'keyup').pipe(
    //Встановлюємо затримку

    debounceTime(700),
    //отримуємо значення яке ввів користувач
    map((event:any) => (event.target).value));
    const subscribe = user$.subscribe(val => {console.log(val);
     gitUserService.getUsersRepsFromAPI(val);
     this.recordRepsToList(gitUserService.name);
    });
}
}
//Приклад1
//Створили потік який вибрасує два значення та закінчується
const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.complete();
})
//створили спостирігача
const observer = {
  next: value => console.log(value), // 1, 2
  error: error => console.error(error), //
  complete: () => console.log("completed") // completed
};
//Приклад2
const timer = new Observable(observer => {
  // Оголошуємо x
  let x = -10;
  setInterval(() => {
    // Передаємо значення функції спостерігачу

    observer.next(x*x);
    // збільшуємо значення на одиницю
    x++;
    console.log ("Потік працює x="+x);
  }, 1000);
});
//Приклад3
const timer1 = new Observable(observer => {
  let x = -10;
  const intervalId = setInterval(() => {
    observer.next(x*x);
    x++;
    console.log ("Потік працює x="+x);
  }, 1000);
  return () => {
   clearInterval(intervalId);
  }
});
//Приклад4
const timer2 = range(0,50)
.pipe(
  filter((num) => num % 3 === 0),
    map((num) => num * 2)

)
const obs = new Observable((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.next(5)
  observer.complete()
}).pipe(
  tap(data => console.log('tap '+data)),           //tap
  filter(data => data > 2),                        //filter
  tap(data => console.log('filter '+data)),        //tap
  map((val) => { return val as number * 2 }),      //map
  tap(data => console.log('final '+data)),         //tap
)


