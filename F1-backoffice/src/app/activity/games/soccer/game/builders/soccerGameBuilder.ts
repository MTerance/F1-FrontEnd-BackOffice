import { SoccerField, SoccerGame, SoccerTeam, SoccerPlayer } from "../models/models";

export class SoccerGameBuilder {

    private CreateGame() : SoccerGame {
        var game = new SoccerGame();
        game.currentField = this.CreateField();
        return game;
    }

    private CreateField() : SoccerField {
        var field = new SoccerField();
        field.name = "Field 1";
        field.description = "Field 1";
        field.width = 100;
        field.height = 100;
        field.depth = 100;
        field.color = "green";
        field.texture = "grass";
        field.model3D = "field1";
        field.team = this.CreateTeams();
        return field;
    }

    private CreateTeams() : SoccerTeam[] {
        var teams = [];
        var team1 = new SoccerTeam();
        team1.name = "Team 1";
        team1.players = this.CreatePlayers();
        teams.push(team1);

        var team2 = new SoccerTeam();
        team2.name = "Team 2";
        team2.players = this.CreatePlayers();
        teams.push(team2);

        return teams;
    }

    private CreatePlayers() : SoccerPlayer[] {

        var players = [];

        for (let index = 0; index < 11; index++) {
            var player = new SoccerPlayer();
            players.push(player);
        }
        return players;
    }

    public Build() : SoccerGame {
        return this.CreateGame();
    }

  }

