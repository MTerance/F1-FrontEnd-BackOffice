import { MiniGameState } from "../IMiniGame";
import{IMiniGame} from "../IMiniGame";

export class Pool implements IMiniGame {

    stateMiniGame : MiniGameState;

    public constructor() {
        this.stateMiniGame = MiniGameState.LOADING;
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
        return this.stateMiniGame; 
    }
}