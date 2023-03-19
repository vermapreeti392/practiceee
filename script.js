let cell = Array.from(document.querySelectorAll('.cell'))
let turn = document.querySelector('.turn');
let btn = document.getElementById('reset');

let PlayerTurn = 'X'

// function to chnge turn
const ChangeTurn = ()=>{
    //console.log('turn');
    return(PlayerTurn==="X"? "0" : "X" )

}

// function for winning check
 const checkWin = ()=>{
        let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (cell[a].innerText === cell[b].innerText &&
            cell[a].innerText === cell[c].innerText &&
            cell[a].innerText!="") {
            turn.innerText = `${cell[a].innerText} wins!`;
            return;
        }
      }
      if (cell.every(cell => cell.innerText !== '')) {
        turn.innerText = "It's a draw!";
      }
 }
 // Game logic
 cell.forEach(cells=>{
    cells.addEventListener('click', (e)=>{
        if(cells.innerText===""){
            cells.innerText = PlayerTurn;
                       
            PlayerTurn = ChangeTurn();                        
            turn.innerText = `${PlayerTurn} player's turn`;
            checkWin();
        }
    })
 })

 btn.addEventListener('click', ()=>{    
    cell.forEach(cell=>{
        cell.innerHTML="";
    })
    turn.innerText="";
    turn= 'X';

 })
 
  

