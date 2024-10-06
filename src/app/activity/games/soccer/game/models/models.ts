
export enum limitZoneType {
    CornerWall = 0,
    ThrowInWall = 1,
    Goal = 2,
    GoalKeeperZone = 3
  }
  
  export enum gamePositionType {
    KickOff = 0,
    PenaltyKick = 1,
    FreeKick = 2,
    CornerKick = 3
  }

  export class zoneParameter {

    id ?: number;
    zoneType ?: gamePositionType;
    positionX ?: number;
    positionY ?: number;
    positionZ ?: number;
  }


  export class limitZoneParameter {
    id ?: number;
    width ?: number;
    height ?: number;
    depth ?: number;
    limitZoneType ?: limitZoneType;
  }
  
  export class SoccerFieldParameters {
    zoneParameters ?: zoneParameter[];
    limitZoneParameters ?: limitZoneParameter[];
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
      fieldParameters ?: SoccerFieldParameters;
  }
  


export class SoccerGame {

    currentField ?: SoccerField;
    currentScore : GameScore;

    constructor() {
        this.currentScore = new GameScore();
    }

    InitGame() {
        this.currentScore.panelScore = {
            1 : 0,
            2 : 0,
        };
    }
}

export class GameScore {
    panelScore : Record<number,number>;

    constructor() {
        this.panelScore = {};
    }
}

export class SoccerTeam {

    id ?: number;
    name ?: string;
    players ?: SoccerPlayer[];
}

export class SoccerPlayer {

    id ?: number;
    name ?: string;
}