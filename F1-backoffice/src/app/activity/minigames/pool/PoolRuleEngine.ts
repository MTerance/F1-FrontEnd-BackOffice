type Rule<T> = (input : T) => boolean;

type isWhiteBall = "" | "";
type isBlackBall = "" | "";


//const isTheCorrectBall

const One = 
    <T>(...rules : Rule<T>[]) => {

    };


enum GamePhase {
    Begin,
    ChooseAngle,
    AdjustPower,
    WaitResultShoot,
    End,
    None
}


export class poolGame {

    currentPhase : GamePhase;
    nbPlayer : number;
    idGame : string;

    constructor()
    {
        this.currentPhase = GamePhase.None;
        this.nbPlayer = 0;
        this.idGame = "";
    }

    BeginGame() :boolean {

        if (this.idGame === "")
        {
            this.currentPhase = GamePhase.Begin;
            this.SaveGame();
        }
        else
            this.LoadGame();
        return true;
    }

    SaveGame()
    {
        // call BackEnd for Save poolGame and pool loader
    }

    LoadGame()
    {
        // call BackEnd for load poolGame and pool loader
    }

    ChangePhase()
    {
        switch (this.currentPhase) {
        case GamePhase.Begin :
            break;
        case GamePhase.ChooseAngle :
            break;
        case GamePhase.AdjustPower :
        break;                                    
        case GamePhase.End :
        break;                                    
        case GamePhase.None :
        break;                                                    
        default:
        break;
        }

    }
}
