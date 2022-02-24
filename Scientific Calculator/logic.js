let input  = document.getElementById('display2');
let result = document.getElementById('display1');
buttons=document.querySelectorAll('button');

let inputValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
    
     //Code For clearing previous calculations     
    if(result.value!="" && buttonText!='='){
        input.value = "";
        result.value = "";
        inputValue="";
    } 

    

    //Code for key checking
    if(buttonText=='C'){
         input.value = "";
         result.value = "";
         inputValue="";

     }
     else if(buttonText=='sin(x)'){
        inputValue="sin("+inputValue+")";
        input.value=inputValue;
     }
     else if(buttonText=='cos(x)'){
        inputValue="cos("+inputValue+")";
        input.value=inputValue;
     }
     else if(buttonText=='tan(x)'){
        inputValue="tan("+inputValue+")";
        input.value=inputValue;
     }
     else if(buttonText=='log'){
        inputValue="log("+inputValue+")";
        input.value=inputValue;
     }
     else if(buttonText=='1/x'){
         inputValue="1/"+inputValue;
         input.value=inputValue;
     }
     else if(buttonText=='ln'){
        inputValue="ln"+inputValue;
        input.value=inputValue;
    }
    else if(buttonText=='|X|'){
        inputValue="|"+inputValue+"|";
        input.value=inputValue;
    }
     else if(buttonText == '='){
         try{
             
             if(inputValue.includes("sin")){
                 let num=inputValue.match(/\d+/g);
                 result.value=Math.sin(num)
             }
             else if(inputValue.includes("cos")){
                let num=inputValue.match(/\d+/g);
                result.value=Math.cos(num)
            }
            else if(inputValue.includes("tan")){
                let num=inputValue.match(/\d+/g);
                result.value=Math.tan(num)
            }
            else if(inputValue.includes("log")){
                let num=inputValue.match(/\d+/g);
                result.value=Math.log10(num);
            }
            else if(inputValue.includes("ln")){
                let num=inputValue.match(/\d+/g);
                result.value=Math.log(num);
            }
            else if(inputValue.includes("|")){
                let num=inputValue.match(/\d+/g);
                    result.value=num;
            }
             else{
                result.value=eval(inputValue);
             }
           
         }
         catch(e){
            result.value="Invalid Operation Entered";
            console.log(e); 
        }
        
        
     }

     else{
         inputValue+=buttonText;
         input.value=inputValue;
     }

    })
}