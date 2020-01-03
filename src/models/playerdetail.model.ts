import { Team } from './team.model';
import { DriDetail } from './dridetail.model';
import { DefDetail } from './defdetail.model';
import { ShoDetail } from './shodetail.model';
import { TradingMarket } from './trading.model';
import { SkillDetail } from './skilldetail.model';
import { PhyDetail } from './phydetail.model';
import { PacDetail } from './pacdetail.model';
import { PasDetail } from './pasdetail.model';

export class PlayerDetail
{

    id:number;
    name:string;
    ovr:number;
    pos:string;
    pac:number;
    pas:number;
    sho:number;
    dri:number;
    def:number;
    phy:number;
    sm:number;
    wf:number;
    wrs:string;
    foot:string;
    season:String;
    face:string;
    teamNavigation:Team;
    flag:string;
    driDetail:DriDetail;
    defDetail:DefDetail;
    position:Position;
    shoDetail:ShoDetail;
    tradingMarket:TradingMarket;
    skillDetail:SkillDetail;
    phyDetail:PhyDetail;
    pacDetail:PacDetail;
    pasDetail:PasDetail;
}