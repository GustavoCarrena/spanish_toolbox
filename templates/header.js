function headerTemplate() {
    
    return `
        <div class="logo">
            <img src="img/home/logo/logo.svg" alt="logo" class="logo-img">
            <span>The Spanish Toolbox</span>
        </div>
        <nav>
            <ul>
                <li><a href="views/language_courses.html">Language Courses</a></li>
                <li><a href="views/special_courses.html">On-Demand Courses</a></li>
                <li class="last"><a href="views/about_us.html">About Us</a></li>
            </ul>
        </nav>
        <a class="contact-button" href="views/contact.html">Contact Us</a>
        <img src="img/home/hero/circ-azul-2.svg" alt="image" class="right-burguer-image" id="rightBurguerImage">
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

export function headerSection(background) {
    const headerSection = document.getElementById('header');
    headerSection.innerHTML = headerTemplate()
};


