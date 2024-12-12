import { GameEngineService, GizmoType } from "src/app/services/game-engine.service";
import { Vector3 } from "@babylonjs/core";

export class SoccerFieldBuilder {

    gameEngineService : GameEngineService;

    constructor(gameEngineService : GameEngineService)
    {
        this.gameEngineService = gameEngineService;
    }

    private BuildOuterLimitGameField(): void {
        // add plane to scene 
        /*
            - ThrowIn 1
            - ThrowIn 2
            - GoalKick/CornerKick 1
            - GoalKick/CornerKick 2
        */
       this.gameEngineService.CreatePlane("ThrowIn_1");
       this.gameEngineService.CreatePlane("ThrowIn_2");
       this.gameEngineService.CreatePlane("GoalKick/CornerKick_1");
       this.gameEngineService.CreatePlane("GoalKick/CornerKick_2");
    }

    private BuildInnerLimitGameField(): void {
        // add plane to scene 
        this.gameEngineService.CreatePlane("MiddleLine");
        this.gameEngineService.CreatePlane("GoalZone_1");
        this.gameEngineService.CreatePlane("GoalZone_2");
        /*
            - middle line
            - GoalZone 1
            - GoalZone 2
        */
       // add box to scene 
       /*
        - boxGoalKeeper 1
        - boxGoalKeeper 2       
       */
      this.gameEngineService.createGizmoModel("boxGoalKeeper_1",GizmoType.Cube);
      this.gameEngineService.createGizmoModel("boxGoalKeeper_2",GizmoType.Cube);
    }


    private LoadSoccerField(): void {
        var fieldPosition : Vector3 = new Vector3(0,1,0);
        this.gameEngineService.LoadMesh("soccerField","assets/","soccerField.glb");

    }

    public Build()
    {
        this.LoadSoccerField();
        this.BuildInnerLimitGameField();
        this.BuildOuterLimitGameField();
    }
}