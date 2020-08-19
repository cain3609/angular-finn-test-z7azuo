import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  message_list: string[] = [];
  constructor() { }

  add(message:string){
    this.message_list.push(message);
  }

  clear(){
    this.message_list = [];
  }

  

}