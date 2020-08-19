import { Injectable } from '@angular/core';
//可觀察物件
import {Observable, of} from 'rxjs';
//
import {MessageService} from './message.service';

/*匯入*/
import {Hero} from './hero';
import {HERO_LIST} from './mock-heroes';

@Injectable({
  providedIn:'root'
})

export class HeroService {
  
  //新增一個私有的messageService屬性引述。MessageService注入->HeroService注入->HeroesComponent
  constructor(private messageService: MessageService){}

  //取得英雄列表
  /*
  getHeroes():Hero[]{
    return HERO_LIST;
  }
  */
  //修改為可觀察物件版本
  getHeroes(): Observable<Hero[]>{
    //在取得英雄列表後完送一則訊息
    this.messageService.add('Hero Service: fetched hero~');

    return of(HERO_LIST);
  }

  

}