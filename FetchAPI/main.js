let inputText = document.querySelector('.inputText');
let DOCtext = document.querySelector('.text');
function getRepos(){
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function (){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            DOCtext.innerHTML=`
            ${this.responseText}
            `;
        }
    }
    myRequest.open(
        "GET",
        inputText.value,
        true
    );
    myRequest.send();
}