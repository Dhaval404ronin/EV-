/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("mydrp").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drpbtn')) {
      var dropdowns = document.getElementsByClassName("drp-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function goBacktoLogin(){
    location.replace("/Login%20page/index.html");
}
  function gotoFooter()
{
    var height = document.body.scrollHeight;
    window.scroll(0 , height);
}
//     const eMail = document.getElementById("e-mail").value;
//     const name = document.getElementById("name").value;
//     const passWord = document.getElementById("pass-word").value;

//     if (localStorage.getItem("users").some((v) => v.email === eMail)){
//       const Name = v.name;
//     }
// var typed = new Typed(".accountInfo h3",{
//   strings: Name,
//   typeSpeed: 150,
//   backSpeed: 100,
//   loop: true
// });