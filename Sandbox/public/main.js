const planbullet = document.querySelector('.planbullet');
let smallbullet =document.querySelector('.smallbullet');
let basic = document.getElementById('basic');
let prem = document.getElementById('prem');
let corp = document.getElementById('corp');

let clientName = document.getElementById('ClientName');
let clientText = document.getElementById('clientText');
let clientPos = document.getElementById('clientPos');

let basicText = document.getElementById('basicText');
let premText = document.getElementById('premText');
let corpText = document.getElementById('corpText');

let animate = document.getElementsByClassName('Price');
planbullet.onclick = ()=>{
    if(smallbullet.classList.contains('left-[3px]')){
        smallbullet.classList.remove('left-[3px]');
        smallbullet.classList.add('left-[21px]');
        basic.innerText = '99';
        prem.innerText = '199';
        corp.innerText = '499';
        basicText.innerText = '/Year';
        premText.innerText = '/Year';
        corpText.innerText = '/Year';
        for(let i = 0 ; i <animate.length ; i++ ){
            animate[i].classList.remove('animate-[up_0.4s_linear]');
            animate[i].classList.add('animate-[up_0.4s_linear]');
        }
    }
    else if(smallbullet.classList.contains('left-[21px]')){
        smallbullet.classList.remove('left-[21px]');
        smallbullet.classList.add('left-[3px]');
        basic.innerText = '9';
        prem.innerText = '19';
        corp.innerText = '49';
        basicText.innerText = '/Month';
        premText.innerText = '/Month';
        corpText.innerText = '/Month';
        for(let i = 0 ; i <animate.length ; i++ ){
            animate[i].classList.remove('animate-[up_0.4s_linear]');
            animate[i].classList.add('animate-[up_0.4s_linear]');
        }
    }
}