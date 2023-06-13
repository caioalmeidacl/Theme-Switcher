const ball = document.querySelector('span.ball')
const body = document.body
let starter = false 

function changeTheme() {
    if(starter){
        body.style.backgroundColor = '#292C35'
        ball.style.left = '5px'
        starter = false 
    } else {
        body.style.backgroundColor = '#F1F1F1'
        ball.style.left = '70px'
        starter = true
    }
}
ball.addEventListener("click", changeTheme)


