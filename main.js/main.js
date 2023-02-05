// hamburger menu //

const hamburger = document.getElementById('hamburger')
const lists = document.getElementById('nav_list')
const line = document.getElementsByClassName('line')

hamburger.addEventListener("click",()=>{
    lists.classList.toggle('active')
    hamburger.classList.toggle('open')
})


// header_sticky//
const header = document.getElementById('header')
window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
    lists.classList.remove('active', window.scrollY > 0)
    hamburger.classList.remove('open', window.scrollY > 0)
})

