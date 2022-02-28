import {headerSection} from "../templates/templates.js"
import {footerSection} from "../templates/templates.js";

const heroMove = document.getElementById('hero');
heroMove.addEventListener('mouseover', () => {
    heroMove.classList.add('animate__shakeX')
});
heroMove.addEventListener('mouseout', () => {
    heroMove.classList.remove('animate__shakeX')
});

headerSection()
footerSection()



