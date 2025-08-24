class Player{
   constructor(name,color,symbol){
      this.name=name;
      this.color=color;
      this.symbol=symbol;
   }
}

class Board{
   constructor(){
      this.board[3][3];
      this.refreshBoard();
   }
   refreshBoard(){
      for(let item of this.board){
         item="-";
      }
   }
   placeSymbol(x,y,player){
      this.board[x][y]=player.symbol;
   }
   displayBoard(){
      for(let i=0;i<3;i++){
         for(let j=0;j<3;j++){
            console.log(this.board[i][j]+" ");
         }
      }
   }
}







//togggle-theme Code
function toggleTheme(){
   let theme=document.body.getAttribute("data-theme");
   document.body.setAttribute("data-theme",theme==="blue"? "red":"blue");
}
let restartButton=document.querySelector(".restartButton").addEventListener("click",()=>{
   toggleTheme();
})

