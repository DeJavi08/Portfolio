/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // check if the field has a value
        if (
            contactName.value === '' ||
            contactEmail.value === '' ||
            Message.value === ''
        ) {
            // add and remove color
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            // show message
            contactMessage.textContent = 'Write all the input fields';
        }   else {
            // serviceID - templateID - #form - publickey
            emailjs
            .sendForm(
                'service_3p2g1cc',
                'template_ubpknok',
                '#contact-form',
                '9j6jFxN2FAaWeq4jT'
            )
            .then(() => {
                // show message and add color, window + dot to open emoji
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent ✅';

                // remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            }, 
            (error) => {
                alert('OOPS! SOMETHING WENT WRONG...', error);
            }
         );

            // clear input fields
            contactName.value = '';
            contactEmail.value = '';
            Message.value = '';
        }
    };

    contactForm.addEventListener('submit', sendEmail);

/*=============== Style Switcher =============== */


/*=============== Share Link =============== 

Whatsapp:
https://api.whatsapp.com/send?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Line:
https://social-plugins.line.me/lineit/share?url=[post-url]
*/

const facebookBtn = document.querySelector('.facebook-btn');
const whatsappBtn = document.querySelector(".whatsapp-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const lineBtn = document.querySelector(".line-btn");

function init() {
    const pinterestImg = document.querySelector(".pinterest-img");

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Halo guys, ayo cek blog ini!");
    let postImg = encodeURI(pinterestImg.src);

    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
        );

    whatsappBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
        );

    twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
       );

    linkedinBtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
       );

    lineBtn.setAttribute(
        "href",
        `https://social-plugins.line.me/lineit/share?url=${postUrl}`
       );
    }

init();