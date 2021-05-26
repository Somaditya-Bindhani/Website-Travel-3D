let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.rock',3,{y:-300})
.to('.girl',3,{y:-200},'-=3')
.fromTo('.bg1',3,{y:-50},{y:0, duration:3},'-=3')
.to('.content',3,{top:0},'-=3');
let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook:0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);

const texts=["Explore","Voyage","Quest","Ride","Enjoy","Cruise"]
let count=0;
let index=0;
let currentText="";
let letter="";
(function type(){
    if (count===texts.length){
        count=0;
    }
    currentText=texts[count];
    letter=currentText.slice(0,++index);
    document.querySelector(".main-title").textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
    setTimeout(type,300);

})();

