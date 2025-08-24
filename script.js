let board=document.querySelector(".board");
bool=true;
board.addEventListener("click",(e)=>{
   let block=e.target;
   if(block.getAttribute("id")==""){
      let img=document.createElement("img");
      let idxStr=block.classList[1];
      let x=parseInt(idxStr[1]);
      let y=parseInt(idxStr[2]);
      if(bool){
         img.setAttribute("src","media/circle-svgrepo-com.svg");
         if(validation(x,y,"O")){
            announceWinner("O");
         }
         bool=false;
      }else{
         img.setAttribute("src","media/cross-svgrepo-com.svg");
         if(validation(x,y,"X")){
            announceWinner("X");
         }
         bool=true;
      }
      block.appendChild(img);
      block.setAttribute("id","set");
      let theme=document.body.getAttribute("data-theme");
      document.body.setAttribute("data-theme",theme==="blue"? "red":"blue");
   }
});


//Restart Button Code
let restartButton=document.querySelector(".restartButton");
restartButton.addEventListener("click",()=>{
   let blocks=document.querySelectorAll(".block");
   blocks.forEach(block=>{
      block.setAttribute("id","");
      block.firstChild?.remove();
      newMatrix();
      counter=0;
      blueScore=0;
      redScore=0;
      blueScoreBoard.textContent="0";
      redScoreBoard.textContent="0";
   });
});

//Validation code
let matrix=[];
newMatrix();
let counter=0;
let extreme=[0,2];
function newMatrix(){
   for(let i=0;i<3;i++){
      matrix[i]=[];
      for(let j=0;j<3;j++){
         matrix[i][j]="-";
      }
   }
}
function validation(x,y,symbol){
   matrix[x][y]=symbol;
   counter++;
   if(counter>=5){
      if((extreme.includes(x))&& (extreme.includes(y))){
         if(verticalVerification(x,y)||horizontalVerification(x,y)||diagonalVerification(x,y)){
            return true;
         }
      }else if((extreme.includes(x))||(extreme.includes(y))){
         if(verticalVerification(x,y)||horizontalVerification(x,y)){
            return true;
         }
      }else{
         if(verticalVerification(x,y)||horizontalVerification(x,y)){
            return true;
         }
         if(matrix[x][y]==matrix[0][0] && matrix[x][y]==matrix[2][2]){
            return true;
         }
         if(matrix[x][y]==matrix[0][2] && matrix[x][y]==matrix[2][0]){
            return true;
         }
      }
      return false;
   }
   return false;
}
function verticalVerification(x,y){
   for(let i=0;i<3;i++){
      if(matrix[i][y]!=matrix[x][y]){
         return false;
      }
   }
   return true;
}
function horizontalVerification(x,y){
   for(let i=0;i<3;i++){
      if(matrix[x][i]!=matrix[x][y]){
         return false;
      }
   }
   return true;
}
function diagonalVerification(x,y){
   if(matrix[x][y]!=matrix[1][1] || matrix[x][y]!=matrix[2-x][2-y]){
      return false;
   }
   return true;
}

//to announce winner
let modal=document.querySelector("dialog");
let blueScoreBoard=document.querySelector(".blueScore");
let redScoreBoard=document.querySelector(".redScore");
let blueScore=0;
let redScore=0;
function announceWinner(symbol){
   if(symbol=="O"){
      modal.textContent="Blue Won";
      blueScoreBoard.textContent=String(++blueScore);
   }
   else{
      modal.textContent="Red Won";
      redScoreBoard.textContent=String(++redScore);
   }
   modal.showModal();
}
//close dialog code
modal.addEventListener("click",()=>{
   modal.close();
});








