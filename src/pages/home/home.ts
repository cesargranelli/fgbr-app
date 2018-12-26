import { TeamPage } from './../team/team';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  onPageTeam() {
    this.navCtrl.push(TeamPage, {slug: "sao-paulo-rock"});
  }

}
