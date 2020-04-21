import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      cssClass: 'animated bounceInRight',
      color: 'secondary',
      position: 'middle'
    });
    toast.present();
  }


}
