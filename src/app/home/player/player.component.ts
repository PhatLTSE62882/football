import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/shared/player.service';
import { Player } from 'src/models/player.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  listPlayer: Player[];
  currentPage = 0;
  styleGSUCL = "color:#f5f5f5";
  styleGI = "color: #ffe28c";

  constructor(private playerService: PlayerService,private router:Router,private activatedRoute:ActivatedRoute) {
    console.log(this.currentPage=parseInt(this.activatedRoute.snapshot.queryParamMap.get("page")));
    if(this.currentPage === 0 || this.currentPage === 1 || isNaN(this.currentPage) || this.currentPage < 0)
    {
      this.currentPage = 1;
      setTimeout(() => {
        this.listPlayer = [{
          id: 0, def: 0, dri: 0, face: '', foot: '', name: '', ovr: 0, pac: 0, pas: 0, phy: 0, pos: '', season: '', sho: 0, sm: 0, wf: 0, flag: '', wrs: '', teamNavigation: { id: 0, name: '', league: '' }
        }];
        this.getAll();
      }, 300)
    }else
    {   
      setTimeout(() => {
        this.listPlayer = [{
          id: 0, def: 0, dri: 0, face: '', foot: '', name: '', ovr: 0, pac: 0, pas: 0, phy: 0, pos: '', season: '', sho: 0, sm: 0, wf: 0, flag: '', wrs: '', teamNavigation: { id: 0, name: '', league: '' }
        }];
        this.getByPage(this.currentPage);
      }, 300)
    }
  }

  ngOnInit() {

  }
  getAll() {
    this.playerService.getPlayers().subscribe(res => {
      console.log(this.listPlayer = res)
      //console.log(this.listPlayer);
    })
  }
  getByPage(number) {
    this.playerService.getPlayersByPage(number).subscribe(res => {
      console.log(this.listPlayer = res)
      //console.log(this.listPlayer);
    })
  }
  moveNext(page) {
    //this.router.navigateByUrl("/home",{queryParams:{page:this.currentPage}});
    page = page +1;
    window.location.href="/home?page="+page;
    //this.router.navigate(["/home"],{queryParams:{page:this.currentPage}});
  }

  movePrev(page) {
    page = page -1;
    if( page <= 0)
    {
      window.location.href="/home?page="+1;

    }else
    {
      window.location.href="/home?page="+page;

    }


  }

}
