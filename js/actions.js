$(document).ready(
    function setSound(){
        window.sessionStorage.setItem('am-castro.sounds', true);
    }
);

function theme(icon){
    let changes = icon.querySelector('svg');
    changes.classList.toggle('fa-moon');
    changes.classList.toggle('fa-sun');
    sound(1);
}
function volume(icon){
    let changes = icon.querySelector('svg');
    changes.classList.toggle('fa-volume-high');
    changes.classList.toggle('fa-volume-low');
    let value = window.sessionStorage.getItem('am-castro.sounds');
    if(value==true){
        value=false;
    }else{
        value=true;
    }
    window.sessionStorage.setItem('am-castro.sounds', value);
    console.log(value)
}
function lang(){

}

function sound(soundType){
    // 1 - switch theme
    // 2 - volume on
    // 3 - volume off
    // 4 - loading ok
    let playAudio = window.sessionStorage.getItem('am-castro.sounds');
    console.log(playAudio);
    if(playAudio){
        if(soundType===1){
            audio = '../sounds/change-theme.mp3';
        }else if(soundType===2){
    
        }else if(soundType===3){

        }else if(soundType===4){
            audio = '../sounds/loading-ok.mp3'
        }
    
        new Audio(audio).play();
    }
}