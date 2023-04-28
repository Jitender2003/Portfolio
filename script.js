function scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollDown(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
function refresh(){
    window.location.href = 'index.html';
}
function button(button){
    button.style.opacity = '0.5';
    setTimeout(function() {
        button.style.opacity = '1';
      }, 2000);
    
}
// transformation for divs in page 2-


function scaleUpI(element) {
    element.style.transform = 'scale(1.2)';
  
    var siblings = Array.from(element.parentNode.children).filter(child => child !== element);
    siblings.forEach(sibling => {
      sibling.style.transform = 'scale(0.90)';
      sibling.style.filter = 'blur(.6px)';
    });
  
  }
  
  function scaleDownI(element) {
    element.style.transform = 'scale(1)';
  
    var siblings = Array.from(element.parentNode.children).filter(child => child !== element);
    siblings.forEach(sibling => {
      sibling.style.transform = 'scale(1)';
      sibling.style.filter = 'none';
    });
  
  }
  
//   Toggle----
const toggleBtn = document.querySelector("#switch");
const changeColor1 = Array.from(document.querySelectorAll(".color-1"));

toggleBtn.addEventListener('click',function(){
  changeColor1.forEach(function(div){
    div.classList.toggle('color-1-new');
  });
});

const changeColor2 = Array.from(document.querySelectorAll(".color-2"));
toggleBtn.addEventListener('click',function(){
  changeColor2.forEach(function(div){
    div.classList.toggle('color-2-new');
  });
});

const changeColor3 = Array.from(document.querySelectorAll(".color-3"));
toggleBtn.addEventListener('click',function(){
  changeColor3.forEach(function(div){
    div.classList.toggle('color-3-new');
  });
});

const changeColor3bg = document.querySelector(".color-3-bg");

toggleBtn.addEventListener('click',function(){
    changeColor3bg.classList.toggle('color-3-bg-new');

});

const changeColor4 = Array.from(document.querySelectorAll(".color-4"));
toggleBtn.addEventListener('click',function(){
  changeColor4.forEach(function(div){
    div.classList.toggle('color-4-new');
  });
});



const changeColorpage2 = document.querySelector(".page2");

toggleBtn.addEventListener('click',function(){
    changeColorpage2.classList.toggle('page2-new');

});



  