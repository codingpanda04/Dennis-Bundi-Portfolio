const dynamicText = document.getElementById("dynamic");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const menuImg = document.getElementById("menu");
const navBar = document.querySelector(".navbar");
const logoDiv = document.querySelector(".logo");
const linksDiv = document.querySelector(".links");
const linkssmallDiv = document.querySelector(".links-small");
const homePage = document.getElementById("home");
const aboutPage = document.getElementById("about");
const workPage = document.getElementById("work");
const servicePage = document.getElementById("service");
const contactPage = document.getElementById("contact");
const mainElem = document.querySelector(".main");



function changeText(){
    setInterval(() => {
        setTimeout(() => {
            dynamicText.innerHTML = "Ghostwriter";
        }, 3000);
        setTimeout(() => {
            dynamicText.innerHTML = "Author";
        }, 6000);
        setTimeout(() => {
            dynamicText.innerHTML = "Freelancer";
        }, 9000);
        setTimeout(() => {
            dynamicText.innerHTML = "Full stack web developer";
        }, 12000);
    }, 15000);
}

changeText();

function submitForm(){
    document.preventDefault();
    nameInput.innerHTML = "";
    email.innerHTML = "";
    message.innerHTML = "";
}

function showMenu(){
    menuImg.setAttribute("src","assets/close.png");
    menuImg.setAttribute("onclick","hideMenu()");
    navBar.style.height = "70vh";
    logoDiv.style.marginTop = "-320px"
    linksDiv.style.marginTop = "-350px";
    linkssmallDiv.style.display = "block";
}

function hideMenu(){
    menuImg.setAttribute("src","assets/menu.png");
    menuImg.setAttribute("onclick","showMenu()");
    navBar.style.height = "10vh";
    logoDiv.style.margin = "initial";
    linksDiv.style.marginTop = "-14px";
    linkssmallDiv.style.display = "none";  

}

function homeSection(homePage){
    const targetSection = document.getElementById("home");
    const sectionPosition = targetSection.offsetTop;
    linkssmallDiv.style.display = "none";
    hideMenu();

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    })
}

function aboutMe(aboutPage){
    const targetSection = document.getElementById("about");
    const sectionPosition = targetSection.offsetTop;
    linkssmallDiv.style.display = "none";
    hideMenu();

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    })
}

function myServices(servicePage){
    const targetSection = document.getElementById("service");
    const sectionPosition = targetSection.offsetTop;
    linkssmallDiv.style.display = "none";
    hideMenu();

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    })
}

function myWorks(workPage){
    const targetSection = document.getElementById("work");
    const sectionPosition = targetSection.offsetTop;
    linkssmallDiv.style.display = "none";
    hideMenu();

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    })
}

function contactMe(contactPage){
    const targetSection = document.getElementById("contact");
    const sectionPosition = targetSection.offsetTop;
    linkssmallDiv.style.display = "none";
    hideMenu();

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
    })
}

window.addEventListener('scroll', ()=>{
    const mainTop = mainElem.getBoundingClientRect().top;

    if (mainTop <= 0) {
        navBar.classList.add('black');
    }else{
        navBar.classList.remove('black');
    }
}) 


   