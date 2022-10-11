let LoadingContainer = document.getElementById('loadingPercentage');
let MenuContainer = document.getElementById('MenuContainer')


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

function ShowMenuContainer(){
    console.log('showing menu')
    MenuContainer.classList = 'show__menu'
}

function HideMenuContainer(){
    MenuContainer.classList.remove('show__menu')
    MenuContainer.classList = 'hide__menu'
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

