const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach(button => {
     button.addEventListener("click",() => {
       button.parentNode.classList.toggle("active");
       //Access the parentNode of the button (which is the container div)
       //Switch/toggle the active class on each div.
     })
});
