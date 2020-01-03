import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/shared/player.service';
import { PlayerDetail } from 'src/models/playerdetail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number;
  detail:PlayerDetail;
  constructor(private activatedRoute:ActivatedRoute,private playerService:PlayerService) { 
    this.id=parseInt(this.activatedRoute.snapshot.queryParamMap.get('player'));
    console.log(this.id);
  }

  ngOnInit() {
        this.playerService.getPlayerDetail(this.id).subscribe(res=>{
           console.log(this.detail = res);
           console.log(this.detail);
        });
  }

}
