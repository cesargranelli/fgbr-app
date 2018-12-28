import { Player } from './../../models/player.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  player: Player;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player = this.navParams.get("player");
  }

}
