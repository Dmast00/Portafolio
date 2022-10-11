let LoadingContainer = document.getElementById('loadingPercentage');


function LoadingText(){
    let count = 0
    var id = setInterval(counter, 10);
    function counter(){
        if(count < 101){
        console.log(count+'%')
        LoadingContainer.innerHTML = count+'%';
        count++
        
        }
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

