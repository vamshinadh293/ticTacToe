let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-bt");
let newgame= document.querySelector("#newButton");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turn= true , won=false;
let count=0;


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn){
            turn=false;
            box.innerText="X";
            box.style.color= "rgb(72,210,254)";
        }
        else{
            turn=true;
            box.innerText="O";
            box.style.color="rgb(226,190,0)";
        }
        box.disabled=true;
        count++;
        
        let win = checkWinner();

        if(count===9 && !won){
            msgcontainer.classList.remove("hide");
            msg.innerText="The Match is a Draw";
        }
    });
});


const winPatterns =[ [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

const showWinner = (val)=>{
    msg.innerText=`Congratulations, ${val} is the Winner`;
    msgcontainer.classList.remove("hide");
    won=true;
};

let restartFunction = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
};

reset.addEventListener("click",restartFunction);
newButton.addEventListener("click",restartFunction);