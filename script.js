const headerEl = document.querySelector('header');
window.addEventListener('scroll', function(){
    const browerScrollY = window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");

    }
})

const spanEl = document.querySelector("main h2 span");
const txtArr = ['AI convergence business expert', 'ChatGPT utilization expert', 'Data analysis expert'];
let index = 0
let currentTxt = txtArr[index].split('')

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currentTxt = spanEl.textContent.split('');
        setTimeout(deleteTxt, 3000);
    }
}
writeTxt();

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join('');
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split('');
        writeTxt();
    }
}

const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScorllY = window.pageYOffset;
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScorllY;
    window.scrollTo({top: targetScorllY, behavior: 'smooth'});
}

const scrollMoveEl = document.querySelectorAll('[data-animation-scroll="true"]');
for(let i=0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    })
}