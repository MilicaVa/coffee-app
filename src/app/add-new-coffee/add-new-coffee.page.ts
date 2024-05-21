import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-coffee',
  templateUrl: './add-new-coffee.page.html',
  styleUrls: ['./add-new-coffee.page.scss'],
})
export class AddNewCoffeePage implements OnInit {

  alertButtons = ['Ok'];

  coffeeImage!: string;
  coffeeName!: string;
  coffeePrice!: string;

  constructor(private dataService: DataService, private alertCtrl:AlertController, private router:Router) { }

  ngOnInit() {
  }

 async filledForm() {
    if(this.coffeeImage == null || this.coffeeName == null || this.coffeePrice == null) {
      const warningAlert = this.alertCtrl.create({
        header: "Warning",
        subHeader: "Please fill in all fields",
        buttons: ['OK']
      });
      (await warningAlert).present();
    }else {
      this.addCoffee();
      const alert = this.alertCtrl.create({
        header: "Added",
        subHeader: "Coffee is succesfully added to list",
        buttons: [{
          text: 'OK',
          handler: () => {this.router.navigateByUrl('/home');}
        }]
      });
      (await alert).present();
    }
  }

  async addCoffee() {
    await this.dataService.addCoffe({
      imgUrl: this.coffeeImage,
      name: this.coffeeName,
      price: this.coffeePrice
    })

  }

}
