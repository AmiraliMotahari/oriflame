//menu button
let flag = 0;

document.querySelector("div.menuButton").addEventListener("click",function(e){
    let elOne = document.querySelector("div.besHov");
    if (flag === 0) {
        document.getElementById("midLine").style.left="100%";
        document.getElementById("midLine").style.opacity="0";

        document.getElementById("topLine").style.rotate="45deg";
        document.getElementById("topLine").style.top="50%";
        document.getElementById("topLine").style.translate="0,-50%";

        document.getElementById("botLine").style.rotate="-45deg";
        document.getElementById("botLine").style.top="50%";
        document.getElementById("botLine").style.translate="0,-50%";

        document.querySelector("div.menuPage").style.display="block";

        elOne.style.background= "#e5e5e526";
        elOne.addEventListener("mouseleave", function () {
            this.style.background = "";
          });
        document.querySelector("div.besHov>div.page").style.display = "block";

        flag++;
    }
    else{  
        document.getElementById("midLine").style.left="";
        document.getElementById("midLine").style.opacity="1";

        document.getElementById("topLine").style.rotate="";
        document.getElementById("topLine").style.top="";
        document.getElementById("topLine").style.translate="";

        document.getElementById("botLine").style.rotate="";
        document.getElementById("botLine").style.top="";
        document.getElementById("botLine").style.translate="";

        document.querySelector("div.menuPage").style.display="";

        flag--;
    }
});

//log in button
document.querySelector("div.left>div.logIn").addEventListener("mouseenter",function(){
    document.querySelector("div.left>div.logIn>button>span").classList.remove("fa-light");
    document.querySelector("div.left>div.logIn>button>span").classList.add("fa-solid");
});
document.querySelector("div.left>div.logIn").addEventListener("mouseleave",function(){
    document.querySelector("div.left>div.logIn>button>span").classList.remove("fa-solid");
    document.querySelector("div.left>div.logIn>button>span").classList.add("fa-light");
});

//search box 
document.querySelector("div.searchBox>input").addEventListener("focus",function(){
    document.querySelector("div.searchBox>span").style.visibility="visible";
    document.querySelector("div.searchBox").style.boxShadow="0 2px 3px rgba(0,0,0,0.16)";
});
document.querySelector("div.searchBox>span").addEventListener("click",function(){
    document.querySelector("div.searchBox>span").style.visibility="hidden";
    document.querySelector("div.searchBox").style.boxShadow="";
});
document.addEventListener("click",function(e){
    const outCheck = document.querySelector("div.searchBox");

    if (!outCheck.contains(e.target)) {
        document.querySelector("div.searchBox>span").style.visibility="hidden";
        document.querySelector("div.searchBox").style.boxShadow="";
    }
});


//shopping bag
document.querySelector("div.right>div.shoppingButton").addEventListener("mouseenter",function(){
    document.querySelector("div.right>div.shoppingButton>a>span").classList.remove("fa-light");
    document.querySelector("div.right>div.shoppingButton>a>span").classList.add("fa-solid");
});
document.querySelector("div.right>div.shoppingButton").addEventListener("mouseleave",function(){
    document.querySelector("div.right>div.shoppingButton>a>span").classList.remove("fa-solid");
    document.querySelector("div.right>div.shoppingButton>a>span").classList.add("fa-light");
});

//menu page
let activator = document.querySelectorAll("div.content");
let target = document.querySelector("div.content>div.page");
activator.forEach((elem)=>{
    elem.addEventListener("mouseenter",function(){
        deactivator();
        elem.childNodes[3].classList.add("activator");
    })
})
function deactivator(){
    activator.forEach((elem)=>{
        elem.childNodes[3].classList.remove("activator");
    })
}