import { GitUserService } from './../git-service/git-user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, from } from 'rxjs';
import { debounceTime,  distinctUntilChanged, mergeMap, catchError,map } from 'rxjs/operators';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {}

  }

