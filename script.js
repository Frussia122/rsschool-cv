let humburger = document.querySelector('.page__humburger'),
    navMenu = document.querySelector(".nav__list");

    humburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    })


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });