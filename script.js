let LoadingContainer = document.getElementById('loadingPercentage');
let MenuContainer = document.getElementById('MenuContainer');
let title = document.getElementById('title');
var string = 'Software & Web Developer.'
let array = string.split("")
let timer;

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

function TyperAnimation(){
    let count = 0
    
    let id = setInterval(typer,150)
    function typer(){
        if(array.length > 0){
            title.innerHTML += array[count];
            count++
            console.log(array[count])
            if(count > array.length){
                title.innerHTML = ''
                count = 0
            }
        }
        else{
            
        }
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

