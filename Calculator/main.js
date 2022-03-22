

function getHistory(){
    return document.getElementById("historyValue").innerText;
}

function printHistory(num){
    document.getElementById("historyValue").innerText = num;
}


function getInput(){
    return document.getElementById("inputValue").innerText;
}

function printInput(num){
    if(num==""){
        document.getElementById("inputValue").innerText = num;
    }
    else{
        document.getElementById("inputValue").innerText = formateNum(num);
    }
}

function formateNum(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName("operator");

for(let i =0 ; i < operator.length ; i++ ){
    operator[i].addEventListener('click',function(){
        if(this.id == "c"){
            printHistory("");
            printInput("");
        }
        else{
            var history = getHistory();
            var input = getInput();
            if( input != ""){

                input = reverseNumber(input);
                history+= input;

                if(this.id=="="){
                    var result = eval(history);
                    printInput(result);
                    printHistory("");
                }
                else{
                    history+=this.id;
                    printHistory(history);
                    printInput("");
                }
            }
        }
    })
}

let numbers = document.getElementsByClassName("btn");

for(let i =0 ; i < numbers.length ; i++ ){
    numbers[i].addEventListener('click',function(){

        var output= reverseNumber(getInput());

        if(output != NaN){
            output+=this.id;
            printInput(output);
        }
    })
}














/* for (let i = 0 ; i < numbers.length ; i++){
    numbers[i].addEventListener('click', function(){
        console.log(this.id);
    });
}
 */

let historyNubmers = document.querySelector(".historyNubmers");
let inputNumbers = document.querySelector(".inputNumbers");
let historyValue=[];
let firstInput = 0;
let operationInput = "";
let secondInput = 0;

/* function renderInput(ele){
    if(ele === "c"){
        historyNubmers.innerHTML='';
        inputNumbers.innerHTML='';
        historyValue=[];

    }
    else if(ele === "x" || ele === "-" || ele === "/" || ele === "+"){
        operationInput=ele;
    }
    else{
        firstInput+=ele;
        inputNumbers.innerHTML=`
        <p>${ele}<p>
        `;
        renderHistory(ele);
    }
}
 */
/* function renderHistory(ele){
    historyValue +=ele;

    if(historyValue.length != 0){
        for(let i =0 ; i < historyValue.length ; i++){
            historyNubmers.innerHTML=`<p>${historyValue}</p>`;
            console.log(historyValue);
        }
    }
}
 */

