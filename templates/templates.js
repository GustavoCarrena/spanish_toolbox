
function headerTemplate() {
    
    return `
    
    <div class="logo">
    <img src="img/home/logo/logo.svg" alt="logo" class="logo-img">
    <span>The Spanish Toolbox</span>
</div>
<nav>
    <ul>
        <li><a href="views/language_courses.html">Language Courses</a></li>
        <li><a href="views/special_courses.html">Special Courses</a></li>
        <li class="last"><a href="views/about_us.html">About Us</a></li>
    </ul>
</nav>
<button type="submit" class="contact-button"><a href="views/contact.html">Contact</a></button>

<img src="img/home/hero/circ-azul-2.svg" alt="image" class="right-burguer-image">
<div class="burguer-menu">
    <input id="btnMenu" class="btn-menu" name="btn-menu" type="checkbox" value="">
    <label for="btnMenu" class="lbl-menu">
        <span class="spn1"></span>
        <span class="spn2"></span>
        <span class="spn3"></span>
    </label>
    <nav class="menu-mobile">
        <ul>
            <li><a class="language-courses-link" href="views/language_courses.html">Language Courses</a></li>
            <li><a class="special-courses-link" href="views/special_courses.html">Special Courses</a></li>
            <li><a class="about-us-link" href="views/about_us.html">About Us</a></li>
            <li><a class="contact-link" href="views/contact.html">Contact</a></li>
        </ul>
    </nav>
</div>
    `
};

export function headerSection(url) {
    const headerSection = document.getElementById('header');
    headerSection.style.background = `url(${url})`;
    headerSection.innerHTML = headerTemplate()
};


function footerTemplate() {
    return `
    
    <main>
    <img src="img/home/generales/elementos-01.svg" alt="image" class="left-image">
    <div class="the-spanish-toolbox">
        <div class="logo">
            <img src="img/home/logo/logo.svg" alt="logo" class="logo-img">
            <span>The Spanish Toolbox</span>
        </div>
        <p class="text">We teach meaningful language, not language with meaning </p>
        <nav>
            <ul>
                <li class="link about-us"><a href="about_us.html">About Us</a></li>
                <li class="link contact-us"><a href="language_courses.html">Contact Us</a></li>
                <li class="link faqs"><a href="faqs.html">FaQs</a></li>
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
    <span class="all-rights-reserved">© 2021 The Spanish Toolbox. All Rights Reserved.</span>
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







