const gomita = document.querySelector('.gomita');
const menu = document.querySelector('.menu-navigation')

/* console.log(menu)
console.log(gomita) */

gomita.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu  &&  e.target != gomita  ){
            menu.classList.toggle("spread")
    }
})