(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// var btn = document.getElementById('btn');


// btn.addEventListener('click',function(e){
//     e.preventDefault()

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var number = document.getElementById('number').value;
//     var messages = document.getElementById('message').value;

//     var body = 'name: '+ name+'<br/> email: '+ email + '<br/> phone number: '+ number + '<br/> message: '+ messages; 

//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "amritgiri5813@gmail.com",
//         Password : "sivabbsrzxdgirra",
//         To : 'amritgiri5813@gmail.com',
//         From : "amritgiri713@gmail.com",
//         Subject : "contact",
//         Body : body
//     }).then(
//       message => alert("sent successfully")
//     );
// })