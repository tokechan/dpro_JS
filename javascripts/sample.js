// // function operateCSS() {
// //     const element = document.getElementsByTagName("p")[0];
// //     // element.classList.add("background_pink");
// //     // element.classList.remove("blue");
// //     element.addEventListener('click', function(){
// //         this.classList.toggle('background_pink');
// //     });
// // };

// // window.onload = operateCSS;


// // function alertClick() {
// //     alert("you clicked me!");
// // };

// // const button = document.getElementById("btn");
// // button.onclick = alertClick;


// // function clickBtn() {
// //     const button = document.getElementById("btn");
// //     button.addEventListener("click", alertClick3);
// // };
// // button.addEventListener("click", function(){
// //     console.log("don't click me!!!");
// // });

// // function alertClick2() {
// //     alert("don't click me!!!");
// // };

// // function alertClick3(e) {
// //     e.target.style.backgroundColor = "orange";
// //     console.log(e);
// // };

// // window.onload = clickBtn;
// function clickBtn() {
//     const button = document.getElementById("btn2");
//     button.addEventListener("click", function(e) {
//       if(!confirm("Leave the page ?")) {
//         e.preventDefault();
//       }
//     });
// }

// window.onload = clickBtn;
  
// const parent = $("#parent");
// console.log(parent);

// $("#btn").click(function(){
//     alert("buttonがクリックされました")
// });

$(function(){
    $("h1").addClass("background_blue");
});

$(function(){
    $("h1").removeClass("title")
});
$(function(){
    $("h1").css("background", "yellow");
});

// $(function(){
//     $("#btn").click(function(){
//         $(this).text("クリックされました");
//     });
// });

$(function(){
    $("#btn").on("click", function(){
        $(this).text("クリックされました");
    });
});