import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/models/player.model';
import { environment } from 'src/environments/environment';
import { PlayerDetail } from 'src/models/playerdetail.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient ) { }
  getPlayers()
  {
    return this.http.get<Player[]>(environment.apiUrl+"/api/player/getall");
  }
  getPlayersByPage(number)
  {
    return this.http.get<Player[]>(environment.apiUrl+"/api/player/page?page="+number);
  }
  getPlayerDetail(number)
  {
    return this.http.get<PlayerDetail>(environment.apiUrl+"/api/player/detail?id="+number);
  }
}
