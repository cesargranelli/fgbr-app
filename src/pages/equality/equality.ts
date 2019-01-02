import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Player } from '../../models/player.model';

@IonicPage()
@Component({
  selector: 'page-equality',
  templateUrl: 'equality.html',
})
export class EqualityPage {

  player: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
  }

}
