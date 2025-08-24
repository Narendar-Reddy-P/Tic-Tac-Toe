let board=document.querySelector(".board");
bool=true;
board.addEventListener("click",(e)=>{
   let block=e.target;
   if(block.getAttribute("id")==""){
      let img=document.createElement("img");
      let idxStr=block.classList[2];
      let x=parseInt(idxStr[1]);
      let y=parseInt(idxStr[2]);
      if(bool){
         img.setAttribute("src","media/cross-svgrepo-com.svg");
         validation(x,y,"X");
         bool=false;
      }else{
         img.setAttribute("src","media/circle-svgrepo-com.svg");
         validation(x,y,"O");
         bool=true;
      }
      block.appendChild(img);
      block.setAttribute("id","set");
      let theme=document.body.getAttribute("data-theme");
      document.body.setAttribute("data-theme",theme==="blue"? "red":"blue");
   }
});

let restartButton=document.querySelector(".restartButton");
restartButton.addEventListener("click",()=>{
   let blocks=document.querySelectorAll(".block");
   blocks.forEach(block=>{
      block.setAttribute("id","");
      block.firstChild?.remove();
      newMatrix();
   });
});

//Validation code
let matrix=[3][3];
let counter=0;
let extreme=[0,2];
function newMatrix(){
   for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
         matrix[i][j]="-"
      }
   }
}
function validation(x,y,symbol){
   matrix[x][y]=symbol;
   counter++;
   if(counter>5){
      if((x in extreme)&& (y in extreme)){
         if(verticalVerification(x,y)||horizontalVerification(x,y)||diagonalVerification(x,y)){
            return true;
         }
      }else if((x in extreme)||(y in extreme)){
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
function verticalVerification(i,j){
   for()
}
function horizontalVerification(i,j){

}
function diagonalVerification(i,j){

}








