import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js"
import { contactPage } from "./contact.js"

export const nav = () => {
    const content = document.getElementById('content');
    const pageContent = document.getElementById('container')
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const homeButton = document.createElement('button');    
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('button');
    menuButton.classList.add('button');
    contactButton.classList.add('button');

    homeButton.textContent = 'Home';
    menuButton.textContent= 'menu';
    contactButton.textContent = 'contact';

    homeButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        homePage()
    });
    menuButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        menuPage()
    });
    contactButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        contactPage()
    });

    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(contactButton);
    content.appendChild(buttonDiv);
}