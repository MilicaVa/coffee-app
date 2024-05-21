import { Component, Input, OnInit } from '@angular/core';
import { Coffee, DataService } from '../service/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-coffee',
  templateUrl: './edit-coffee.page.html',
  styleUrls: ['./edit-coffee.page.scss'],
})
export class EditCoffeePage implements OnInit {
  @Input() coffee!: Coffee;

  constructor(
    private dataService: DataService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async editedCoffee() {
    this.editCoffee();
    const alert = this.alertCtrl.create({
      header: 'Edited',
      subHeader: 'Coffee info is succesfully edited',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.dismiss();
          },
        },
      ],
    });
    (await alert).present();
  }

  async editCoffee() {
    await this.dataService.editCoffee({
      imgUrl: this.coffee.imgUrl,
      name: this.coffee.name,
      price: this.coffee.price,
    });
  }
}
