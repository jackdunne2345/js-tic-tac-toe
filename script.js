const board={
    xScore:0,
    oScore:0,
    one:"x",
    two:null,
    three:null,
    four:null,
    five:null,
    six:null,
    playerTurn:true,
    reset_state:function(){
        //reset board state and maintain score
        //display welcome message
        // select random player by changing playerTurn
        this.place_x_or_o()
    },
    place_x_or_o:function(){
        alert(
        `[${this.one? this.one:"1"}],[${this.two? this.two:"2"}],[${this.three? this.three:"3"}]\n`+
        `[${this.four? this.four:"4"}],[${this.five? this.five:"5"}],[${this.six? this.six:"6"}]\n`+
        `[${this.seven? this.seven:"7"}],[${this.eight? this.eight:"8"}],[${this.nine? this.nine:"9"}] `
        )
        //take input in console
        //place in corisponding key
        //this.check_win()
    },
    check_win:function(){
        //check if winner logic
        //if win, increment score then this.reset_state()
        //else change player turn then this.place_x_or_o()
    },
}

board.reset_state();
