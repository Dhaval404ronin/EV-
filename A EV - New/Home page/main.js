var typed = new Typed(".auto-input",{
    strings: ["Drive Beyond","Let's Go!!!","Don't Break"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});
function gotomap(){
    location.replace("/Map/index.html");
}
function cursorEffect(){
    const page1Content = document.querySelector(".section1");
    const cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(dets){
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
}); 

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
});
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
};
cursorEffect();

// function page2Animation(){
//     gsap.from(".elen h1",{
//         y:120,
//         stagger:0.2,
//         duration:1,
//         scrollTriger:{
//             trigger:"page2",
//             scroller: "body",
//             start : "top 47%",
//             end : "top 46%",
//             markers : true,
//             scrub : 2
//         }
//     });
// };
// page2Animation();

