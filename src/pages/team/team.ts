import { PlayerPage } from './../player/player';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Team } from './../../models/team.model';
import { Player } from './../../models/player.model';

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
      name: "Rogério Ceni",
      number: 1,
      path: "assets/imgs/player-face.png",
      points: 12.53,
      position: "GOL",
      scouts: [
        {
          equality: 1.2,
          id: 1,
          path: "",
          points: 4.53,
          type: "FF"
        },
        {
          equality: 1.5,
          id: 2,
          path: "",
          points: 8,
          type: "GO"
        }
      ],
      slug: "rogerio-ceni"
    },
    {
      id: 2,
      name: "Pikachu",
      number: 2,
      path: "assets/imgs/player-face.png",
      points: 3.12,
      position: "LAT",
      scouts: [],
      slug: "iago-pikachu"
    }]
  };

  public slug: string;
  public team: Team;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slug = this.navParams.get("slug");
    this.team = this.dados;
  }

  detail(player: Player) {
    this.navCtrl.push(PlayerPage, {player: player});
  }

}
