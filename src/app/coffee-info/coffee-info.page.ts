import { Component, Input, OnInit } from '@angular/core';
import { Coffee, DataService } from '../service/data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-info',
  templateUrl: './coffee-info.page.html',
  styleUrls: ['./coffee-info.page.scss'],
})
export class CoffeeInfoPage implements OnInit {
  @Input() coffee!:Coffee;

  constructor(
    private dataService: DataService, 
    private navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
    this.coffee = history.state.coffee;
    console.log(this.coffee);
  }
}
