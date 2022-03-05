


function footerTemplate() {
    return `
    
    <main>
    <img src="img/home/generales/elementos-01.svg" alt="image" class="left-image">
    <div class="the-spanish-toolbox">
        <div class="logo">
            <img src="img/home/logo/logo.svg" alt="logo" class="logo-img">
            <span>The Spanish Toolbox</span>
        </div>
        <p class="text">We teach meaningful language, not language with meaning</p>
        <nav>
            <ul>
                <li class="link about-us"><a href="about_us.html">About Us</a></li>
                <li class="link contact-us"><a href="language_courses.html">Contact Us</a></li>
                <li class="link faqs"><a href="faqs.html">FAQ's</a></li>
            </ul>
        </nav>
    </div>
    <div class="courses-container language-courses">
        <h6 class="title">Language Courses</h6>
        <p class="courses-text">Regular Spanish Courses</p>
        <p class="courses-text">Tailor-Made Spanish Courses</p>
        <p class="courses-text">Conversations Workshops</p>
    </div>
    <div class="courses-container special-courses-footer">
        <h6 class="title">Special Courses</h6>
        <p class="courses-text">Argentina Culture Courses</p>
        <p class="courses-text">Business Spanish</p>
        <p class="courses-text">AP Spanish Language and Literature special support</p>
    </div>
</main>
<footer>
    <div class="all-rights-reserved"><span>© 2022 The Spanish Toolbox.</span> <span>All Rights Reserved.</span></div>
    <div class="social-media">
        <img src="img/home/footer/iconos_instagram.svg" alt="image" class="social-icons">
        <img src="img/home/footer/iconos_linkedin.svg" alt="image" class="social-icons">
        <img src="img/home/footer/iconos_messenger.svg" alt="image" class="social-icons">
        <img src="img/home/footer/iconos_correo.svg" alt="image" class="social-icons">
    </div>
    <div class="terms-privacy">
        <span>Privacy Policy</span>
        <span class="terms">Terms of Service</span>
    </div>
</footer>
    `
};

export function footerSection() {
    const footerSection = document.getElementById('footer');
    footerSection.innerHTML = footerTemplate()
};







