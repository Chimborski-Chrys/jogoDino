const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
        
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20)
        }else{
        position += 20;
        dino.style.bottom = position + 'px';
        }

    }, 30);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1040;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() =>{
        if(cactusPosition < -70){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 40 && position < 40){
        
            clearInterval(leftInterval);
            document.body.innerHTML ='<h1 class="game-over"> </h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 90)
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keydown', handleKeyUp);

