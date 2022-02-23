let input  = document.getElementById('display2');
let result = document.getElementById('display1');
buttons=document.querySelectorAll('button');

let inputValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
     if(buttonText=='C'){
         input.value = "";
         result.value = "";
         inputValue="";

     }
     else if(buttonText == '='){
         result.value=eval(inputValue);
     }
     else{
         inputValue+=buttonText;
         input.value=inputValue;
     }

    })
}