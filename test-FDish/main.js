/*==================== GRID ====================*/
function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
    item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
/*======================== TOP button ========================*/
//Get the button:
mybutton = document.getElementById("myBtn");   
// controlButton = document.getElementsByClassName("pagination-button");        
// When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        let heightLimit = document.body.scrollHeight - 2.7*document.getElementById('item-container').scrollHeight;
        console.log(heightLimit);
        if (document.body.scrollTop > Number(heightLimit) || document.documentElement.scrollTop > Number(heightLimit)) {
          mybutton.style.display = "block";
          // controlButton.style.display = "block";
          $('.pagination-button').css('display','block');
        } else {
          mybutton.style.display = "none";
          $('.pagination-button').css('display','none');
          // controlButton.style.display = "none";
        }
      }
      
// When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

/*==================== STARTING ANIMATION ====================*/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".imgBx", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tl.fromTo(".contentBx", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".controls", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
origin: 'top',
distance: '30px',
duration: 1200,
reset: true,
});
sr.reveal(`.about-img,.contact-container`, {interval: 200});
/*====================  ====================*/
$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  6000);

