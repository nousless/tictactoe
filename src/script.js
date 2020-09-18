const winningSets = 
[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]                    
]

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
    
    if(checkWin()){
        let message = isCircleTurn ? 'Player 2 WON!' : 'Player 1 WON';
        console.log(message);
    }
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
    return cell.getAttribute("data-cell-index");
}

function winMessage(){
    
}
function checkWin(){
    let hasWon = false;
    let checkFor = isCircleTurn ? 'o-filled': 'x-filled';
    let currentSquare;
    //susirinkt fillintus square'us
    let filledSquares = [...cells].filter(cell => cell.classList.contains(checkFor));
    let filledIndexes = filledSquares.map(getCellIndex);
    
    //get overlap
    winningSets.forEach(set =>{
        set.forEach(square =>{
            console.log(square)
            filledIndexes.indexOf(square)
        })
    })

   
    //check every filledIndex against each win condition with .find()
    //and if at least 3 are found, return true
    
    // //intersectint winning setus ir fillintus square'us
}
