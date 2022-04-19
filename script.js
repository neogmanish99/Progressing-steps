const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');


//1.Declaring a variable with a initial value 1

let currentActive = 1;




// 2.Adding a event listener to the next button to increment the 
//  (currentactive) varible by 1 to its available length


next.addEventListener('click', () => {
    currentActive ++;
    
    if(currentActive > circles.length){
        currentActive = circles.length;
    }


    //Calling the update function so that the updates takes place 
    update();
})


prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive<1){
        currentActive = 1;
        
    }
    
    update();
})


//3.Declaring a function 
//Tip for me : (( index starts from 0 and currentActive is 1 )),

function update() {
    
    circles.forEach((circle, index)=>{
        if(index<currentActive){
            circle.classList.add('active')
            // document.body.style.backgroundImage = "url(./img/cyber-girl-on-fat-bike-4k-6s.jpg)";
            // document.body.style.background = `url(./img/cyber-girl-on-fat-bike-4k-6s.jpg) no-repeat center center/cover`;
            
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    // 1.console.log(actives.length/circles.length);
    //  2.console.log((actives.length/circles.length) * 100 + '%');
    // 3.console.log((actives.length - 1)/(circles.length - 1) * 100 + '%');


    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%';

    if(currentActive===1){
        prev.disabled=true;
    }else if(currentActive===circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
} 