let text=document.querySelector(".text2");
let array=["I'm a Web Developer","I'm a Programmer","I'm Musa Yahea"];
let arrIdx=0;

function textReplace(){
    setInterval(()=>{
        text.innerHTML=array[arrIdx];
        arrIdx++;
        if(arrIdx>=array.length){
            arrIdx=0;
        }
    },5000);
};

textReplace();