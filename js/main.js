//menu button
let flag = 0;
let menuButton = document.querySelector("div.menuButton");

function menuButtonActivator() {
  document.getElementById("midLine").style.left = "100%";
  document.getElementById("midLine").style.opacity = "0";

  document.getElementById("topLine").style.rotate = "45deg";
  document.getElementById("topLine").style.top = "50%";
  document.getElementById("topLine").style.translate = "0,-50%";

  document.getElementById("botLine").style.rotate = "-45deg";
  document.getElementById("botLine").style.top = "50%";
  document.getElementById("botLine").style.translate = "0,-50%";

  document.querySelector("div.menuPage").style.display = "block";

  // elOne.style.background= "#e5e5e526";
  // elOne.addEventListener("mouseleave", function () {
  //     this.style.background = "";
  //   });
  // document.querySelector("div.besHov>div.page").style.display = "block";

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

  document.querySelector("div.menuPage").style.display = "";

  flag = 0;
}

menuButton.addEventListener("click", function () {
  if (flag === 0) {
    menuButtonActivator();
    ourStoryPageDeactivator();
    joinUsPageDeactivator();
    logInPageDeactivator();
    shoppingBagPageDeactivator()
  } else {
    menuButtonDeactivator();
  }
});

//log in button
document
  .querySelector("div.left>div.logIn")
  .addEventListener("mouseenter", function () {
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

//shopping bag
let shoppingBag = document.querySelector("div.right>div.shoppingButton");
let shoppingbPage = document.querySelector("div.shoppingBagPage");

function shoppingBagPageActivator(){
  shoppingBag.addEventListener("mouseenter", function () {
  document.querySelector("div.right>div.shoppingButton>a>span").classList.remove("fa-light");
  document.querySelector("div.right>div.shoppingButton>a>span").classList.add("fa-solid");

  shoppingbPage.classList.add("activator");
  document.querySelector(
    "div.shoppingBagPage>div.shoppingContainer"
  ).style.opacity = "1";
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
});
shoppingBag.addEventListener("click", function () {
  document.querySelector("div.shoppingBagPage").classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
});
}
function shoppingBagPageDeactivator(){
    document.querySelector("div.right>div.shoppingButton>a>span").classList.remove("fa-solid");
    document.querySelector("div.right>div.shoppingButton>a>span").classList.add("fa-light");
}
shoppingBagPageActivator();
shoppingBag.addEventListener("mouseleave", shoppingBagPageDeactivator);


document
  .querySelector("div.shoppingBagPage>div.shoppingContainer")
  .addEventListener("mouseleave", function () {
    this.opacity = "1";
    shoppingbPage.style.display = "none";
    shoppingbPage.classList.remove("activator");
  });


//menu page
let activator = document.querySelectorAll("div.menuContainer>div.content");
let target = document.querySelector("div.menuContainer>div.content>div.page");
activator.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    deactivator();
    elem.childNodes[3].classList.add("activator");
  });
});
function deactivator() {
  activator.forEach((elem) => {
    elem.childNodes[3].classList.remove("activator");
  });
}

//ourstory page
let ourStoryButton = document.getElementById("ourStory");
let ourStoryPage = document.querySelector("div.ourStoryPage");

function ourStoryPageActivator() {
  ourStoryPage.classList.add("activator");
}
function ourStoryPageDeactivator() {
  ourStoryPage.classList.remove("activator");
}

ourStoryButton.addEventListener("click", function () {
  ourStoryPage.classList.toggle("activator");
  menuButtonDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator()
});
// document.querySelector("div.ourStoryPage>div.ourStoryContainer").addEventListener("mouseleave",function(){
//     ourStoryPageDeactivator();
// });

//join us page
let joinUsButton = document.getElementById("joinUs");
let joinUsPage = document.querySelector("div.joinUsPage");

function joinUsPageActivator() {
  joinUsPage.classList.add("activator");
}
function joinUsPageDeactivator() {
  joinUsPage.classList.remove("activator");
}

joinUsButton.addEventListener("click", function () {
  joinUsPage.classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator()
});

//login
let logInButton = document.getElementById("logIn");
let logInPage = document.querySelector("div.logInPage");
let userEmailAuth = document.getElementById("userEmail");
let userPassAuth = document.getElementById("userPass");

function logInPageActivator() {
  logInPage.classList.add("activator");
}
function logInPageDeactivator() {
  logInPage.classList.remove("activator");
}

logInButton.addEventListener("click", function () {
  logInPage.classList.toggle("activator");
  menuButtonDeactivator();
  ourStoryPageDeactivator();
  joinUsPageDeactivator();
  shoppingBagPageDeactivator()
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

