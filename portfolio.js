'use strict';

const navlinks = document.querySelectorAll('header nav a')

const activepage = () => {
    navlinks.forEach(link => {
        link.classList.remove('active1');
    });
};

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active1')){
            activepage()

            link.classList.add('active1')
        }
    });
});

const menuicon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')
const menulinks = navbar.querySelectorAll('a')

menuicon.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');  

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default page reloa    


    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object)    
    submitBtn.innerHTML = "Please wait..."    
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            submitBtn.innerHTML = "Success! Message sent.";
            submitBtn.style.color = "green";
            form.reset(); // Clear the form
        } else {
            console.log(response);
            submitBtn.innerHTML = json.message || "Something went wrong!";
            submitBtn.style.color = "red";
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
        result.style.color = "red";
    })
    .then(function() {
        // Hide the message after 5 seconds (optional)
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    });
});








    const preloader = document.querySelector("[data-preload]");

    window.addEventListener("load", function() {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
    });

   

    
    document.querySelectorAll('.input-box').forEach(input => {
        const toggleFilled = () => {
            if(input.value != ''){
                input.classList.add('filled');
            }else{
                input.classList.remove('filled')
            }
        }

        toggleFilled();

        input.addEventListener('input', toggleFilled);
        input.addEventListener('change', toggleFilled);
        input.addEventListener('blur', toggleFilled);

    });



    let btn = document.getElementById('btn')
    window.addEventListener('scroll',function(){
        if(window.scrollY >= 600){
            btn.style.display = 'block';
        }else{
            btn.style.display = 'none';
        }
    })

    btn.addEventListener('click', () => {
        scroll({
            left:0,
            top:0,
            behavior: 'smooth'
        })
    })