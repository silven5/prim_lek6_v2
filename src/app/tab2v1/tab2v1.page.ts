import { Component, OnInit } from '@angular/core';
import { GitUserService } from './../git-service/git-user.service';
import { interval,of,range,timer,fromEvent,from } from 'rxjs';
import { filter, map,tap,mapTo,mergeMap,concatAll,mergeAll,switchAll,exhaust,debounceTime,distinctUntilChanged,switchMap,catchError } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-tab2v1',
  templateUrl: './tab2v1.page.html',
  styleUrls: ['./tab2v1.page.scss'],
})
export class Tab2v1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Приклад1
ras()
{
  let timer1$=timer(0, 1000).pipe(
    map(() => makeRequest())
  ).subscribe({
    next: console.log
  });
}
  //Приклад1_1
  ras1()
  {
    timer(0, 1000).pipe(
      mergeMap(() => makeRequest())
    ).subscribe({
      next: console.log
    });
  }

    //Приклад2
ras2()
{
  console.log("ConcatAll");
  of(
    firstInnerObservable,
    secondInnerObservable
  ).pipe(
    concatAll()
  ).subscribe({
    next: console.log
  });
}
ras2_1()
{
  console.log("MergeAll");
  of(
    firstInnerObservable,
    secondInnerObservable
  ).pipe(
    mergeAll()
  ).subscribe({
    next: console.log
  });
}
ras2_2()
{
  console.log("switchAll");
  of(
    firstInnerObservable,
    secondInnerObservable
  ).pipe(
    switchAll()
  ).subscribe({
    next: console.log
  });
}
ras2_3()
{
  console.log("exhaust");
  of(
    firstInnerObservable,
    secondInnerObservable
  ).pipe(
    exhaust()
  ).subscribe({
    next: console.log
  });
}



}

//Приклад1

const makeRequest = () => {
  return timer(1000).pipe(
    mapTo('success')
  )
}


//Приклад2
// потік, генерує 1 по після однієї секунди
const firstInnerObservable = timer(1000).pipe(
  mapTo(1)
);
//  потік, генерує 2 по після однієї секунди
const secondInnerObservable = timer(500).pipe(
  mapTo(2)
);
