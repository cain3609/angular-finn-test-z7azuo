import { Component, OnInit } from "@angular/core";
//重構hero屬性為Hero
import { Hero } from "../hero";
//取得模擬的英雄資料們->移除->改成匯入service
//import { HERO_LIST } from "../mock-heroes";
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';


@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    hero_til: "delabomba",
    name: "達拉崩吧斑得貝迪卜多比魯翁"
  };
  */

  /*模擬的英雄列表->由屬性改為宣告*/
  //hero_list = HERO_LIST;
  hero_list: Hero[];

  /*處理click事件*/
  selectedName: Hero;

  //1.聲明一個私有的heroService屬性
  //2.標記為HeroService注入點
  //增加注入message
  constructor(private heroSerice: HeroService,private messageService:MessageService) {}

  //初始時呼叫
  ngOnInit() {
    this.getHeroes();
  }




  /*頁面的script名稱*/
  onSelect(forList : Hero):void{
    this.selectedName = forList;
    //注意：這邊使用反引號而非單引
    this.messageService.add(`HeroesComponent: Selected Hero  = ${forList.hero_til}`);
  }

  getHeroes():void{
    //this.hero_list = this.heroSerice.getHeroes();
    //當從遠端伺服器撈取資料時，便會是非同步操作，service須等到伺服器給出的response才會取得資料
    this.heroSerice.getHeroes().subscribe(hero_list=> this.hero_list = hero_list);
    //↑Observrable發出陣列後，subscribe()再把這個陣列傳至callback函式中，函式再將陣列賦值給元件的hero_list屬性


  }


}
