function openmenu(){
    let open=document.getElementById("menuoff");
    open.id="menuon";
}
function closemenu(){
    let close=document.getElementById("menuon");
    close.id="menuoff";
}

let moneyView = document.getElementsByClassName("moneyView");


let alldata=[];
let totalRemain = 0;
getFromLocalStorage();

/* document.getElementById("data-entry").addEventListener("click", function(event){
    event.preventDefault()
  });
 */


totalViewVar = `$${totalRemain}`;

document.getElementById("totalView").innerText = totalViewVar ;


function submitdata(){
    let title = document.getElementById("title").value;
    let type = document.getElementById("Type").value;
    let amount = document.getElementById("amount1").value;
    if (title != "" && amount != ""){
        if(type=="Income"){
            totalRemain+=parseInt(amount);
            const data = {
                Title : title,
                Type : type,
                AmountMoney : parseInt(amount),
            };
    
            alldata.push(data);
            setToLocalStorage(alldata,totalRemain);
        }

        else{
            totalRemain-=parseInt(amount);
            const data = {
                Title : title,
                Type : type,
                AmountMoney : parseInt(amount),
            };
    
            alldata.push(data);
            setToLocalStorage(alldata,totalRemain);
        }
    }
    else{
        alert("Enter All Details");
    }
}

function ShowData(ele){
    const listView = document.querySelector('.content');
    listView.innerHTML = '';

    ele.forEach( function(item){

        let div = document.createElement('div');

        div.setAttribute('class','data');

        div.innerHTML = `
          <p>$${item.Title}</p>
          <p>${item.Type}</p>
          <p>$${item.AmountMoney}</p>
        `;
        listView.append(div);
    });
}

function setToLocalStorage(ele,ele2){
    localStorage.setItem("Data", JSON.stringify(ele));
    localStorage.removeItem("TotalRemain");
    localStorage.setItem("TotalRemain",ele2);
    ShowData(ele);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem("Data");
    const reference1 = localStorage.getItem("TotalRemain");
    // if reference exists
    if (reference1) {
        totalRemain = parseInt(reference1);
    }
    alldata= JSON.parse(reference);
    ShowData(alldata);
}

