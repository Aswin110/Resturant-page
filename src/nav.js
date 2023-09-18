import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js"
import { contactPage } from "./contact.js"

export const nav = () => {
    const content = document.getElementById('content');
    const pageContent = document.getElementById('container')
    const buttonDiv = document.createElement('div');

    const stakeHouse = document.createElement('H1'); 
    stakeHouse.textContent = 'Steak House';
    content.appendChild(stakeHouse)
    stakeHouse.style.color = "grey";

    buttonDiv.classList.add('buttonDiv');

    const homeButton = document.createElement('button');    
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('button');
    homeButton.classList.add('active');
    menuButton.classList.add('button');
    contactButton.classList.add('button');

    homeButton.textContent = 'Home';
    menuButton.textContent= 'menu';
    contactButton.textContent = 'contact';

    homeButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        setActiveButton(homeButton)
        homePage()
    });
    menuButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        setActiveButton(menuButton)
        menuPage()
    });
    contactButton.addEventListener('click', () => {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.firstChild);
        }
        setActiveButton(contactButton)
        contactPage()
    });

    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(contactButton);
    content.appendChild(buttonDiv);

}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }