const pbtm = document.getElementById('pbtm');
      

 
let timer = 30;
let score = 0;
let hitrn;
let collect = '';

 
/*
 
for (var i = 0; i < 306 ; i++) {
   
  let rn = Math.floor(Math.random() * 10)
    
  collect += `<div class="bubble" id="bubble">${rn}</div>`;
   
}
        

pbtm.innerHTML = `${collect}`;
 */

function getNewHit() {
        hitrn = Math.floor(Math.random() * 10);
        document.getElementById('hitval').textContent = hitrn;
}

function runTimer() {
    let timerInt = setInterval(function() {
           if (timer > 0) {
        timer--;
        document.getElementById('timerval').textContent = timer;
         }
          else {
            let refresh = document.createElement('div');
           
            refresh.classList.add('refresh');
           
            document.body.appendChild(refresh)
           
             
             
            //let restart = document.createElement('a');
            let restartBtn = document.createElement('button');
            
            restartBtn.addEventListener('click', function() {
                    window.location.href = 'index.html';
            })
            
            restartBtn.textContent = 'restart';
            
            restartBtn.classList.add('restartBtn')
            
            
            
            let pDiv = document.createElement('div');
            let p = document.createElement('p');
            
            pDiv.classList.add('pDiv');
            
            
            
            p.textContent = `score : ${score}`;
            
            
            
            
            pDiv.appendChild(p)
            pDiv.appendChild(restartBtn)
            refresh.appendChild(pDiv)
           
            clearInterval(timerInt)
           
            pbtm.innerHTML = 'Refresh the page to restart'
        } 
    }, 1000)
}


function increaseScore() {
         score += 10;
         document.getElementById('scoreval').textContent = score;
}

/*pbtm.addEventListener('click', (dets) => {
        let clickedNum = (Number(dets.target.textContent));
        if(clickedNum == hitrn) {
                increaseScore()
                getNewHit()
                 
                generateBubbles()
                runTimer()

        }
        
        else {
                getNewHit()
                 
                generateBubbles()
                runTimer()
        }
})

runTimer()
getNewHit()
*/


function generateBubbles() {
    collect = ''; // Clear the existing bubbles
    for (var i = 0; i < 306; i++) {
        let rn = Math.floor(Math.random() * 10);
        collect += `<div class="bubble" id="bubble">${rn}</div>`;
    }
    pbtm.innerHTML = `${collect}`; // Update the bubbles displayed
}

pbtm.addEventListener('click', (dets) => {
    let clickedNum = (Number(dets.target.textContent));
    if (clickedNum == hitrn) {
        increaseScore();
        getNewHit();
    }
    getNewHit(); // Always generate a new hit number regardless of whether the guess was right or wrong
    generateBubbles(); // Re-randomize bubbles on every click
});

// Initial game setup
runTimer();
getNewHit();
generateBubbles(); // Call this for the first time to populate bubbles


