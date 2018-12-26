import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Team } from './../../models/team.model';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  dados: Team = {
    id: 1,
    slug: "rockman-dx",
    name: "Rockman DX",
    players: [{
      id: 1,
      slug: "rogerio-ceni",
      name: "Rogério Ceni"
    },
    {
      id: 2,
      slug: "iago-pikachu",
      name: "Pikachu"
    }]
  };

  public slug: string;
  public team: Team;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slug = this.navParams.get("slug");
    this.team = this.dados;
  }

}
