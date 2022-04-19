const planbullet = document.querySelector('.planbullet');
let smallbullet =document.querySelector('.x3');
let basic = document.getElementById('basic');
let prem = document.getElementById('prem');
let corp = document.getElementById('corp');

let textSelector = document.getElementById('text1');

let clientName = document.getElementById('ClientName');
let clientText = document.getElementById('clientText');
let clientPos = document.getElementById('clientPos');

let basicText = document.getElementById('basicText');
let premText = document.getElementById('premText');
let corpText = document.getElementById('corpText');

let animate = document.getElementsByClassName('Price');

let elements = document.querySelectorAll('[data-parralex]');

function isInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

window.addEventListener('scroll',()=>{
    elements.forEach(element => {
        const anim = element.getAttribute('animates');
        if(isInViewport(element)){
            element.classList.add(anim);
        }
        
    });
})


smallbullet.onclick = ()=>{
    if(smallbullet.classList.contains('month')){
        smallbullet.classList.remove('month');
        smallbullet.classList.add('year');
        basic.innerText = '99';
        prem.innerText = '199';
        corp.innerText = '499';
        basicText.innerText = '/Year';
        premText.innerText = '/Year';
        corpText.innerText = '/Year';
    }
    else if(smallbullet.classList.contains('year')){
        smallbullet.classList.remove('year');
        smallbullet.classList.add('month');
        basic.innerText = '9';
        prem.innerText = '19';
        corp.innerText = '49';
        basicText.innerText = '/Month';
        premText.innerText = '/Month';
        corpText.innerText = '/Month';
    }
}

// Slider

function move(e){
    if(e==1){
        console.log('1');
        textSelector.style.marginLeft='0';
    }
    else if(e==2){
        console.log('2');
        textSelector.style.marginLeft ='-67%';
    }
    else{
        console.log('3');
        textSelector.style.marginLeft ='-134%';
    }
}