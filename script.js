let counter=0;
const back = document.getElementById('geri');
const forward = document.getElementById('ileri1');
const slider = document.getElementById('slaytlar');
const bilgi = document.getElementById('nmbr');
const max = 9;
let ch=1915;
forward.addEventListener('click',()=>{
    if (counter<max){
        counter=counter+1;
        slider.style.left='-'+1921*counter+'px';
       
    }
    bilgi.innerText=''+Number(counter+1);
   
    }
    
) 
back.addEventListener('click',()=>{
    if (counter>0){
        counter=counter-1;
        slider.style.left='-'+counter*1921+'px';
        if(counter==0){
            slider.style.left='-10px'
        }
    }
   
    bilgi.innerText=''+Number(counter+1);
    }
) 

