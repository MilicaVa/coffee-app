import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EditCoffeePage } from '../edit-coffee/edit-coffee.page';

type Coffee = {
  imgUrl?: string,
  name?: string,
  price?: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  coffees: any;

  sub: Subscription = new Subscription;

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getData() {
    this.sub = this.dataService.getCoffee().subscribe((coffeeRes) => {
      this.coffees = coffeeRes;
    })
  }

  async deleteCoffee(coffeeId: string) {
    const alert = this.alertCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'OK',
          handler: () => { this.dataService.deleteCoffee(coffeeId); }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    (await alert).present();
  }

  goToAddPage() {
    this.router.navigateByUrl('/add-new-coffee');
  }

  async goToEditPage(coffee: Coffee) {
    const modal = await this.modalCtrl.create({
      component: EditCoffeePage,
      componentProps: {
        coffee: coffee
      }
    });
    return await modal.present();
  }

  goToCoffeeInfoPage(coffee: Coffee) {
    this.navCtrl.navigateForward(['/coffee-info'], {
      state: {
        coffee: coffee
      }
    })
  }

  async logOut() {
    const alert = this.alertCtrl.create({
      header: 'Do you want to logout?',
      buttons: [{
        text: 'Yes',
        handler: () => { this.router.navigateByUrl('/log-in'); }
      },
      {
        text: 'No'
      }]
    });
    (await alert).present();
  }

}
