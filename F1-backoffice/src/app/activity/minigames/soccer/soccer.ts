import { GameEngineService, GizmoType } from "src/app/services/game-engine.service";
import { IMiniGame, MiniGameState } from "../IMiniGame";


export enum PlayerPosition {

    GK = 0, // Goal Keeper
    DP = 1, // Defense Player
    MP = 2, // Middle Field Player
    OP = 3 // Offence Player
}


export class TeamInfo {

        id ?: number;
        name ?: string;
}

export class Team {
       
    info : TeamInfo;

    constructor(info : TeamInfo)
    {
        this.info = info;
    }
}

export class StatsPlayer {
    power ?: number;
    stamina ?: number;
    resistance ?: number;
    acceleration ?: number;
    mobility ?: number;
}

export class PlayerProfile {
    id ?: number;
    firstName ?:string;
    lastName ?:string;
    teamId ?: number;
    position ?: string;
    stats ?: StatsPlayer;
}

export class SoccerGameBuilder {

    private engineGameService : GameEngineService;

    constructor(engineGameService : GameEngineService)
    {
        this.engineGameService = engineGameService;
    }


    private loadPlayer(infoPlayer : PlayerProfile)
    {
       const playerMesh = this.engineGameService.createGizmoModel("nameofObject",GizmoType.Mesh);
       
    }

    private loadTeams()
    {
        
    }

    private buildAssetGame()
    {

    }

    private buildGameRules()
    {
        // add rules to game
        /*
            - Time
            - Score
            - Players
            - Referee
            - Ball
        */
    }

    private buildGame()
    {

    }

    public build()
    {
        this.buildGame();
    }

}


export class Soccer implements IMiniGame {

    currentStateMiniGame : MiniGameState;
    gameEngineService : GameEngineService;

    public constructor(gameEngineService : GameEngineService)
    {
        this.gameEngineService = gameEngineService;
        this.currentStateMiniGame = MiniGameState.LOADING;
    }

    Load(): void {
        throw new Error("Method not implemented.");
    }

    Run(): void {
        throw new Error("Method not implemented.");
    }

    Pause(): void {
        throw new Error("Method not implemented.");
    }

    GetState(): MiniGameState {
        return this.currentStateMiniGame;
    }
}