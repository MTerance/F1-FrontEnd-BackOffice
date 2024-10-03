export enum MiniGameState {
    LOADING,
    PLAYNG,
    PAUSED,
    FINISHED,
    ERROR
}



export interface IMiniGame {
    Load():void;
    Run():void;
    Pause():void;
    GetState():MiniGameState;
}