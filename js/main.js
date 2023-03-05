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
let menuPage = document.querySelector("section.mainContainer>nav>div.menuPage");
let groupPage = document.querySelectorAll("div.group");
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
let menuLogInBtn = document.querySelector("div.menuLogInButton");
let menuLogInPage = document.querySelector("div.menuLogInPage");
let menuPageFooter = document.querySelector("div.menuPageFooter");
let tabsContainer = document.querySelector("div.tabsContainer");
let showNextTab = document.querySelector(
  "section.menuTabsContainer>span.showNextTab"
);
let showPervTab = document.querySelector(
  "section.menuTabsContainer>span.showPrevTab"
);
let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);
let playVid = document.querySelector("button[id=playVid]");
let vid1 = document.querySelector("video[id=vid1]");

window.addEventListener("load", function () {
  this.addEventListener("resize", function () {
    windowSize = this.innerWidth;
  });
});
document.addEventListener("scroll", function () {
  root.style.setProperty("--menuHeight", "60px");
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
    document.querySelector("div.menuPage>div.menuContainer").style.opacity =
      "1";
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
function deactivator3(elemMain2) {
  groupPage.forEach((elem) => {
    if (elem !== elemMain2 && elem.childNodes[3] !== undefined) {
      elem.childNodes[3].classList.remove("flexActivator");
      elem.style.setProperty("--Y", "0deg");
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
function miniSearchPageDeactivator() {
  searchBoxRightWrapper.classList.remove("activator");
}
function toggleMenuPageDetails() {
  menuLogInPage.classList.toggle("activator");
  activator.forEach((elem) => {
    elem.classList.toggle("deactivator");
  });
  menuPageFooter.classList.toggle("flexDeactivator");
}

//menu button
menuButton.addEventListener("click", function () {
  if (windowSize > 992) {
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
  } else if (windowSize < 992) {
    ourStoryPageDeactivator();
    joinUsPageDeactivator();
    logInPageDeactivator();
    shoppingBagPageDeactivator();
    miniSearchPageDeactivator();

    document.querySelector("div.menuPage").classList.add("activator");
    //document.querySelector("div.menuPage>div.menuContainer").style.left = "0";
  }
});

//menu page --->page
if (windowSize > 992) {
  activator.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      deactivator();
      elem.childNodes[3].classList.add("activator");
    });
  });
} else if (windowSize <= 992) {
  activator.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.stopPropagation();
      deactivator2(elem);
      console.log("100000");
      elem.childNodes[3].classList.toggle("activator");
      if (elem.childNodes[3].classList.contains("activator")) {
        elem.style.setProperty("--X", "180deg");
      } else {
        elem.style.setProperty("--X", "0deg");
      }
    });
  });
}
menuPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === menuPage) {
    //e.target.classList.toggle("activator");
    menuButtonDeactivator();
    if (flag2 === 1) {
      toggleMenuPageDetails();
      menuLogInBtn.style.backgroundColor = "";
      miniMenuButton.style.backgroundColor = "";
      flag2 = 0;
    }
  }
});

if (windowSize <= 992) {
  groupPage.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.stopPropagation();
      deactivator3(elem);
      if (elem.childNodes[3] !== undefined) {
        elem.childNodes[3].classList.toggle("flexActivator");
        if (elem.childNodes[3].classList.contains("flexActivator")) {
          elem.style.setProperty("--Y", "180deg");
        } else {
          elem.style.setProperty("--Y", "0deg");
        }
      }
    });
  });
  //mini manu page
  miniMenuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    if (flag2 === 0) {
      menuButtonDeactivator();
    } else {
      toggleMenuPageDetails();
      menuLogInBtn.style.backgroundColor = "";
      miniMenuButton.style.backgroundColor = "";
      flag2 = 0;
    }
  });
  console.log(flag2);
}

//mini menu login page
menuLogInBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (flag2 === 0) {
    toggleMenuPageDetails();
    this.style.backgroundColor = "white";
    miniMenuButton.style.backgroundColor = "#f5f5f5";
    flag2 = 1;
  } else {
    menuButtonDeactivator();
    toggleMenuPageDetails();
    this.style.backgroundColor = "";
    miniMenuButton.style.backgroundColor = "";
    flag2 = 0;
    console.log(flag2);
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
document
  .querySelector("div.searchBox>input")
  .addEventListener("focus", function () {
    document.querySelector("div.searchBox>span").style.visibility = "visible";
    document.querySelector("div.searchBox").style.boxShadow =
      "0 2px 3px rgba(0,0,0,0.16)";
  });
document
  .querySelector("div.searchBox>span")
  .addEventListener("click", function () {
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
searchBoxRightWrapper.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === searchBoxRightWrapper) {
    e.target.classList.toggle("activator");
  }
});

//shopping bag
shoppingBag.addEventListener("mouseenter", function () {
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.remove("fa-light");
  document
    .querySelector("div.right>div.shoppingButton>a>span")
    .classList.add("fa-solid");

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

//ourstory page
ourStoryButton.addEventListener("click", function (e) {
  e.stopPropagation();
  ourStoryPage.classList.toggle("activator");
  menuButtonDeactivator();
  joinUsPageDeactivator();
  logInPageDeactivator();
  shoppingBagPageDeactivator();
  miniSearchPageDeactivator();
});
ourStoryPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === ourStoryPage) {
    e.target.classList.toggle("activator");
  }
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
joinUsPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === joinUsPage) {
    e.target.classList.toggle("activator");
  }
  console.log(e.target);
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
logInPage.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === logInPage) {
    e.target.classList.toggle("activator");
  }
});

userEmailAuth.addEventListener("input", function () {
  document.querySelector("label[for=userEmail]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

  userPassAuth.style.borderBottomColor = "";
  document.querySelector("label[for=userPass]").style.color = "";
});
userPassAuth.addEventListener("input", function () {
  document.querySelector("label[for=userPass]").style.color = "#68BB93";
  this.style.borderBottomColor = "#68BB93";

  document.querySelector("label[for=userEmail]").style.color = "";
  userEmailAuth.style.borderBottomColor = "";
});

//support button
supBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.add("supportPageActivator");
});
minimizeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "white";
  supBtn.style.border = "2px solid #CCCCCC";
  document.querySelector("section.supportBtn>p").style.color = "black";
  document.querySelector("section.supportBtn>span>svg").style.fill = "black";
});
closeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  supportPage.classList.remove("supportPageActivator");
  supBtn.style.backgroundColor = "";
  supBtn.style.border = "unset";
  document.querySelector("section.supportBtn>p").style.color = "";
  document.querySelector("section.supportBtn>span>svg").style.fill = "";
});

//delivery btn
document.getElementById("deliveryClose").addEventListener("click", function () {
  document.querySelector("section.swiprContainer>div.delivery").style.display =
    "none";
});

//menu tabs

//tabsContainer
let flagMneuTab = 0;
showNextTab.addEventListener("click", function (e) {
  e.stopPropagation();
  tabsContainer.classList.add("clickShowMore");
  showPervTab.classList.add("activator");
  if (windowSize > 576 && windowSize < 768 && flagMneuTab <= 135) {
    tabsContainer.style.left = `${-flagMneuTab}%`;
    flagMneuTab += 135;
  } else if (windowSize < 576 && flagMneuTab <= 245) {
    flagMneuTab += 35;
    tabsContainer.style.left = `${-flagMneuTab}%`;
    console.log(flagMneuTab);
  }
  if (windowSize < 576 && flagMneuTab > 245) {
    showNextTab.classList.add("deactivator");
  }
  if (windowSize > 576 && (windowSize >= 768 || flagMneuTab > 135)) {
    showNextTab.classList.add("deactivator");
  }
});
showPervTab.addEventListener("click", function (e) {
  e.stopPropagation();
  showNextTab.classList.remove("deactivator");
  if (windowSize > 576 && windowSize < 768 && flagMneuTab > 135) {
    flagMneuTab -= 135;
    tabsContainer.style.left = "0%";
  } else if ((windowSize > 576 && windowSize >= 768) || flagMneuTab <= 135) {
    flagMneuTab -= 135;
    tabsContainer.classList.remove("clickShowMore");
    this.classList.remove("activator");
    tabsContainer.style.left = "48px";
  } else if (windowSize < 576 && flagMneuTab > 0) {
    flagMneuTab -= 35;
    tabsContainer.style.left = `${-flagMneuTab}%`;
    console.log(flagMneuTab);
  }
});

//video play button
vid1.addEventListener("click", function () {
  if (vid1.paused){
    // vid1.setAttribute("controls", "controls"); 
    vid1.play();
    playVid.classList.add("deactivator");
  }
  else {
    vid1.pause();
    playVid.classList.remove("deactivator");
  }
});
playVid.addEventListener("click", function () {
  if (vid1.paused) {
    // vid1.setAttribute("controls", "controls");
    vid1.play();
    playVid.classList.add("deactivator");
  } else {
    vid1.pause();
    playVid.classList.remove("deactivator");
  }
});