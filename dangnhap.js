const menuIcon= document.querySelector(".icon-menu")
const menuList= document.querySelector(".menu-list")
menuIcon.addEventListener('click',()=>{
    if(menuList.classList.contains('visible')){
        menuList.classList.remove('visible')
    }
    else{
        menuList.classList.add('visible')
    }
})