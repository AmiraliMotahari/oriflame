//get window size 
let windowSize = window.innerWidth;
let flag = 0;
let flag2 = 0;
let flag3 = 0;
let menuButton = document.querySelector("div.menuButton");
let miniMenuButton = document.querySelector("div.menuProductsButton");
let shoppingBag = document.querySelector("div.right>div.shoppingButton");
let shoppingbPage = document.querySelector("div.shoppingBagPage");
let activator = document.querySelectorAll("div.menuContainer>div.content");
let innerGroupPage = document.querySelectorAll("div.clumnOne>div.group");
let target = document.querySelector("div.menuContainer>div.content>div.page");
let ourStoryButton = document.getElementById("ourStory");
let ourStoryPage = document.querySelector("div.ourStoryPage");
let joinUsButton = document.getElementById("joinUs");
let joinUsPage = document.querySelector("div.joinUsPage");
let supBtn = document.querySelector("section.supportBtn");
let supportPage = document.querySelector("div.supportPage");
let closeBtn = document.getElementById("supportCloseBtn");
let minimizeBtn = document.getElementById("supportMinimizeBtn");
let logInButton = document.getElementById("logIn");
let logInPage = document.querySelector("div.logInPage");
let userEmailAuth = document.getElementById("userEmail");
let userPassAuth = document.getElementById("userPass");
let searchIconRight = document.getElementById("searchIconRight");
let searchBoxRightWrapper = document.querySelector("div.searchBoxRightWrapper");

window.addEventListener("load",function(){
  this.addEventListener("resize", function () {
    windowSize = this.innerWidth;
  });
});


function menuButtonActivator() {
  document.getElementById("midLine").style.left = "100%";
  document.getElementById("midLine").style.opacity = "0";

  document.getElementById("topLine").style.rotate = "45deg";
  document.getElementById("topLine").style.top = "50%";
  document.getElementById("topLine").style.translate = "0,-50%";

  document.getElementById("botLine").style.rotate = "-45deg";
  document.getElementById("botLine").style.top = "50%";
  document.getElementById("botLine").style.translate = "0,-50%";

  document.querySelector("div.menuPage").classList.add("activator");
  setInterval(() => {
      document.querySelector("div.menuPage>div.menuContainer").style.opacity = "1";
    }, 10);

  flag = 1;
}
function menuButtonDeactivator() {
  document.getElementById("midLine").style.left = "";
  document.getElementById("midLine").style.opacity = "1";

  document.getElementById("topLine").style.rotate = "";
  document.getElementById("topLine").style.top = "";
  document.getElementById("topLine").style.translate = "";

  document.getElementById("botLine").style.rotate = "";
  document.getElementById("botLine").style.top = "";
  document.getElementById("botLine").style.translate = "";

  document.querySelector("div.menuPage").classList.remove("activator");

  flag = 0;
}
function shoppingBagPageActivator() {
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
  miniSearchPageDeactivator();
}
function shoppingBagPageDeactivator() {
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.remove("fa-solid");
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.add("fa-light");
  shoppingbPage.classList.remove("activator");
}
function shoppingLogoDeactivator() {
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.remove("fa-solid");
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.add("fa-light");
}
function deactivator() {
  activator.forEach((elem) => {
    elem.childNodes[3].classList.remove("activator");
  });
}
function deactivator2(elemMain) {
  activator.forEach((elem) => {
    if (elem !== elemMain) {
      elem.childNodes[3].classList.remove("activator");
      elem.style.setProperty("--X", "0deg");
    }
  });
  
}
function supportPageActivator() {
  supportPage.classList.add("test");
}
function supportPageDeactivator() {
  supportPage.classList.remove("test");
}
function ourStoryPageActivator() {
  ourStoryPage.classList.add("activator");
}
function ourStoryPageDeactivator() {
  ourStoryPage.classList.remove("activator");
}
function joinUsPageActivator() {
  joinUsPage.classList.add("activator");
}
function joinUsPageDeactivator() {
  joinUsPage.classList.remove("activator");
}
function logInPageActivator() {
  logInPage.classList.add("activator");
}
function logInPageDeactivator() {
  logInPage.classList.remove("activator");
}
function miniSearchPageDeactivator(){
  searchBoxRightWrapper.classList.remove("activator");
}


//menu button
menuButton.addEventListener("click", function () {
  if(windowSize > 992){
    if (flag === 0) {
      menuButtonActivator();
      ourStoryPageDeactivator();
      joinUsPageDeactivator();
      logInPageDeactivator();
      shoppingBagPageDeactivator();
      miniSearchPageDeactivator();
    } else {
      menuButtonDeactivator();
    }
  }
  else if (windowSize < 992) {
    ourStoryPageDeactivator();
    joinUsPageDeactivator();
    logInPageDeactivator();
    shoppingBagPageDeactivator();
    miniSearchPageDeactivator();


    document.querySelector("div.menuPage").classList.add("activator");
    //document.querySelector("div.menuPage>div.menuContainer").style.left = "0";
  }
});


//mini manu page
miniMenuButton.addEventListener("click",function(){
  menuButtonDeactivator();
});
if(windowSize <= 992){
  innerGroupPage.forEach((elem) => {
    elem.addEventListener("click", function () {
      //deactivator2(elem);
      //elem.childNodes[4].classList.toggle("flexActivator");
      console.log(elem.childNodes[3]);
    });
  });
}

//log in button
document.querySelector("div.left>div.logIn").addEventListener("mouseenter", function () {
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.remove("fa-light");
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.add("fa-solid");
  });
document
  .querySelector("div.left>div.logIn")
  .addEventListener("mouseleave", function () {
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.remove("fa-solid");
    document
      .querySelector("div.left>div.logIn>button>span")
      .classList.add("fa-light");
  });

//search box
document.querySelector("div.searchBox>input").addEventListener("focus", function () {
    document.querySelector("div.searchBox>span").style.visibility = "visible";
    document.querySelector("div.searchBox").style.boxShadow =
      "0 2px 3px rgba(0,0,0,0.16)";
  });
document.querySelector("div.searchBox>span").addEventListener("click", function () {
    document.querySelector("div.searchBox>span").style.visibility = "hidden";
    document.querySelector("div.searchBox").style.boxShadow = "";
  });
document.addEventListener("click", function (e) {
  const outCheck = document.querySelector("div.searchBox");

  if (!outCheck.contains(e.target)) {
    document.querySelector("div.searchBox>span").style.visibility = "hidden";
    document.querySelector("div.searchBox").style.boxShadow = "";
  }
});
//mini search button
searchIconRight.addEventListener("click", function () {
  searchBoxRightWrapper.classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator();
});

//shopping bag
shoppingBag.addEventListener("mouseenter", function () {
  document.querySelector("div.right>div.shoppingButton>a>span").classList.remove("fa-light");
  document.querySelector("div.right>div.shoppingButton>a>span").classList.add("fa-solid");

  shoppingbPage.classList.add("activator");
  setInterval(() => {
    document.querySelector(
      "div.shoppingBagPage>div.shoppingContainer"
    ).style.opacity = "1";
  }, 100);
  shoppingBagPageActivator();
});
shoppingBag.addEventListener("click", function () {
    shoppingbPage.classList.toggle("activator");
    shoppingBagPageActivator();
  });

shoppingBag.addEventListener("mouseleave", shoppingLogoDeactivator);


document
  .querySelector("div.shoppingBagPage>div.shoppingContainer")
  .addEventListener("mouseleave", function () {
    this.opacity = "1";
    shoppingbPage.style.display = "none";
    shoppingbPage.classList.remove("activator");
  });


//menu page --->page
if(windowSize > 992){
  activator.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      deactivator();
      elem.childNodes[3].classList.add("activator");
    });
  });
}
else if(windowSize <= 992){
  activator.forEach((elem) => {
    elem.addEventListener("click", function () {
      deactivator2(elem);
      elem.childNodes[3].classList.toggle("activator");
      if (elem.childNodes[3].classList.contains("activator")) {
        elem.style.setProperty("--X", "180deg");
      } else {
        elem.style.setProperty("--X", "0deg");
      }
    });
  });
}




//ourstory page
ourStoryButton.addEventListener("click", function () {
  ourStoryPage.classList.toggle("activator");
  menuButtonDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator();
  miniSearchPageDeactivator();
});
// document.querySelector("div.ourStoryPage>div.ourStoryContainer").addEventListener("mouseleave",function(){
//     ourStoryPageDeactivator();
// });

//join us page
joinUsButton.addEventListener("click", function () {
  joinUsPage.classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator();
  miniSearchPageDeactivator();
});

//login




logInButton.addEventListener("click", function () {
  logInPage.classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  shoppingBagPageDeactivator();
  miniSearchPageDeactivator();
});

userEmailAuth.addEventListener("input",function(){
  document.querySelector("label[for=userEmail]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

  userPassAuth.style.borderBottomColor = "";
  document.querySelector("label[for=userPass]").style.color = "";
});
userPassAuth.addEventListener("input",function(){
  document.querySelector("label[for=userPass]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

   document.querySelector("label[for=userEmail]").style.color = "";
   userEmailAuth.style.borderBottomColor = "";
});


//support button 
function ActivateSupportPage() {
  supportPage.classList.add("supportPageActivator");
  setTimeout(() => {
    supBtn.removeEventListener("click", ActivateSupportPage);
  }, 10);
}
function minimizeSupportPage() {
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "white";
  supBtn.style.border = "2px solid #CCCCCC";
  document.querySelector("section.supportBtn>p").style.color = "black";
  document.querySelector("section.supportBtn>span>svg").style.fill = "black";
  setTimeout(() => {
    supBtn.addEventListener("click", ActivateSupportPage);
  }, 10);
}
function closeSupportPage() {
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "";
  supBtn.style.border = "unset";
  document.querySelector("section.supportBtn>p").style.color = "";
  document.querySelector("section.supportBtn>span>svg").style.fill = "";
  setTimeout(() => {
    supBtn.addEventListener("click", ActivateSupportPage);
  }, 10);
}

supBtn.addEventListener("click", ActivateSupportPage);
minimizeBtn.addEventListener("click", minimizeSupportPage);
closeBtn.addEventListener("click", closeSupportPage);


//delivery btn
document.getElementById("deliveryClose").addEventListener("click",function(){
  document.querySelector("section.swiprContainer>div.delivery").style.display="none";
});

//menu tabs
// let menutabs = document.querySelector("div.menuTabsContainer");
// let menutabs2 = document.querySelector("section.menuTabsContainer>div.tabsContainer");
// let menutabs3 = menutabs2.firstChild;
// let emptyDiv = document.createElement("div");
// emptyDiv.style.width="88px";
// emptyDiv.style.height = "44px";
// emptyDiv.style.backgroundColor = "black";

// menutabs2.insertBefore(emptyDiv, menutabs3);

// // window.document.addEventListener("resize",function(){
// //   menutabs2.append(emptyDiv);
// // });

// menutabs.addEventListener("click",function(){

// });
