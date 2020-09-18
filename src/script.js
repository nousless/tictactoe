
const cells = document.querySelectorAll('.cell')

let isCircleTurn = false;


cells.forEach(cell =>{
    cell.addEventListener('click', handleclick, {once:true})
})

function handleclick(event){
    const cell = event.target;
    //place mark
    placeMark(cell);
    //check if placing player won
    checkWin()
    //toggle to other player
    togglePlayer();
}

function togglePlayer(){
    isCircleTurn = !isCircleTurn;
}
function placeMark(cell){
    if(isCircleTurn){
        cell.innerHTML = "o";
        cell.classList.add('o-filled');
    }else{
        cell.innerHTML = "x";
        cell.classList.add('x-filled');
    }
}
function getCellIndex(cell){
    return parseInt(cell.getAttribute("data-cell-index"), 10);
}

function winMessage(){
    let message = isCircleTurn ? 'Player 2 WON!' : 'Player 1 WON';
    alert(message);
}

function checkWin(){
    
    let checkFor = isCircleTurn ? 'o-filled': 'x-filled';
    //susirinkt fillintus square'us
    let filledSquares = [...cells].filter(cell => cell.classList.contains(checkFor));
    let filledIndexes = filledSquares.map(getCellIndex);
    
    const winningSets = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]                    
    ]
    
    winningSets.forEach(set =>{
        let counter = 0;
        set.forEach(x=>{
            if(filledIndexes.includes(x)){
                counter ++
            }
        })
        if(counter === 3){
            winMessage()
            
        }
    })

}
