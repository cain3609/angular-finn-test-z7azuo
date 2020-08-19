import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  //這裡的需設為public，因為將在html中使用
  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }

}