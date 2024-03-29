 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

 import {getDatabase,ref,child ,get,set} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

   apiKey: "AIzaSyBK2hHhGcmPYpJeNorvV0wkbDKBCXnPBbI",

   authDomain: "web-lop.firebaseapp.com",

   projectId: "web-lop",

   storageBucket: "web-lop.appspot.com",

   messagingSenderId: "250364090707",

   appId: "1:250364090707:web:29a903da5c27c7030769a6",

   measurementId: "G-XLW1Z7MBP5"

 };

 const app = initializeApp(firebaseConfig);


const menuIcon= document.querySelector(".icon-menu")
const menuList= document.querySelector(".menu-list")
const navbar= document.querySelector(".navbar")
const downIcon= document.querySelector(".down")
const slideHot= document.getElementById("slide")
const itemsHot=document.getElementsByClassName('item')
const prevButton= document.getElementById('prev')
const nextButton= document.getElementById('next')
const slideTrending= document.getElementById("slide-trending")
const itemsTrending=document.getElementsByClassName('item-trending')
const prevButtonTrending= document.getElementById('prev-trending')
const nextButtonTrending= document.getElementById('next-trending')
const slideNB= document.getElementById("slide-nb")
const itemsNB=document.getElementsByClassName('item-nb')
const prevButtonNB= document.getElementById('prev-nb')
const nextButtonNB= document.getElementById('next-nb')
const searchIcon= document.getElementById('search')
const tabList= document.getElementById('tab')
const searchBox= document.getElementById('search-box')
const exitBtn= document.getElementById('exit')
let offset= navbar.offsetTop;

menuIcon.addEventListener('click',()=>{
    if(menuList.classList.contains('visible')){
        menuList.classList.remove('visible')
    }
    else{
        menuList.classList.add('visible')
    }
})

function addSticky(){
    if(window.pageYOffset >=offset && window.innerWidth>390){
        navbar.style.position="fixed"
        navbar.style.marginTop="-41px"
    }
    else{
        navbar.style.position="relative"
        navbar.style.marginTop="0px"
    }
}

window.onscroll=()=>{
    addSticky()
}
window.onresize=()=>{
offset=navbar.offsetTop
}

downIcon.addEventListener('click',()=>{
    window.scrollTo(0,720);
})

function addSlide(slide,items,next,prev){
    next.addEventListener('click',()=>{
    slide.append(items[0])
})
prev.addEventListener('click',()=>{
    slide.prepend(items[items.length-1])
})
}
addSlide(slideHot,itemsHot,nextButton,prevButton);
addSlide(slideTrending,itemsTrending,nextButtonTrending,prevButtonTrending);
addSlide(slideNB,itemsNB,nextButtonNB,prevButtonNB);


searchIcon.addEventListener('click',()=>{
    tabList.classList.add('an');
    searchBox.classList.add('hien')
})
exitBtn.addEventListener('click',()=>{
    searchBox.classList.remove('hien')
    tabList.classList.remove('an')
})




document.addEventListener("DOMContentLoaded",()=>{
    let auth=localStorage.getItem('auth');
    let dangky= document.getElementById('dk');
    let dangnhap=document.getElementById('dn')
    let hello=document.getElementById('hello');


console.log(name)
    if(auth=="true"){
    dangky.innerHTML= "Đăng xuất"
    dangky.href="dangnhap.html"
    dangnhap.href="index.html";
    dangky.addEventListener("click",()=>{
        localStorage.setItem("auth",false)
        localStorage.removeItem("email")
    })
const database=getDatabase()

const refdb=ref(database)
var path=localStorage.getItem("email")
path   = path.match(/^.+(?=@)/)[0];
console.log(path)
get(child(refdb,'User/' + path)).then((snapshot)=>{
 let name=snapshot.val().email
    name   = name.match(/^.+(?=@)/)[0]; 
    hello.innerHTML=`Xin chào ${name} `
}).catch((error)=>{
    alert(error)
})
    hello.style.display="inline-block"
    
}else{
    dangky.innerHTML="Đăng ký"
    dangky.href="dangky.html"
    dangnhap.href="dangnhap.html"
}

})


const backTopBtn = document.querySelector("[data-back-top-btn]");


window.addEventListener("scroll", function () {
    if (window.scrollY >= 50){
        backTopBtn.classList.add("active");
    }
    else{
        backTopBtn.classList.remove("active");
    }
})





