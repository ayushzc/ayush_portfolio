/*============== Toggle Icon Navbar ==============*/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrolly >= document.scrollingElement.scrollHeight);
}

function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        phone_number : document.getElementById("number").value,
        email_subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_uaehxk6", "template_l6oc819", params).then(function (res){
        alert("success! " + res.status);
    })
}