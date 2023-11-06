



 
 export class SoccerGameBuilder {



    
  }


export class SoccerField {

    id ?: number;
    name ?: string;
    description ?: string;
    width ?: number;
    height ?: number;
    depth ?: number;
    color ?: string;
    texture ?: string;
    model3D ?: string;
    team ?: SoccerTeam[];
}

export class SoccerTeam {

    players ?: SoccerPlayer[];
}

export class SoccerPlayer {

}