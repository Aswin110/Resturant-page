import reservation from './assets/reservation.jpg';
import order from './assets/order.jpg';
import Manager from './assets/Manager.jpg';

export const contactPage = () => {
    const contactContent = document.getElementById('container');

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us"
    heading.classList.add("heading")
    contactContent.appendChild(heading);

    const reservationContact = document.createElement('div');
    reservationContact.classList.add("contact")

    const reservationHeading = document.createElement('h3');
    reservationHeading.textContent = "For Reservation";
    reservationContact.appendChild(reservationHeading);

    const reservationImg = document.createElement('img');

    reservationImg.src = reservation;
    reservationImg.height = '150';
    reservationContact.appendChild(reservationImg);

    const reservationContent = document.createElement('p');
    reservationContent.textContent = "+91 860 183 6765";
    reservationContact.appendChild(reservationContent);

    contactContent.appendChild(reservationContact);

    const orderContact = document.createElement('div');
    orderContact.classList.add("contact")

    const orderHeading = document.createElement('h3');
    orderHeading.textContent = "Ordering Service";
    orderContact.appendChild(orderHeading);

    const orderImg = document.createElement('img')

    orderImg.src = order;
    orderImg.height = '150';
    orderContact.appendChild(orderImg);

    const orderContent = document.createElement('p');
    orderContent.textContent = "+91 976 183 6765";
    orderContact.appendChild(orderContent);

    contactContent.appendChild(orderContact);

    const managerContact = document.createElement('div');
    managerContact.classList.add("contact");

    const managerHeading = document.createElement('h3');
    managerHeading.textContent = "Manager";
    managerContact.appendChild(managerHeading);
    const managerImg = document.createElement('img');

    managerImg.src = Manager;
    managerImg.height = '150';
    managerContact.appendChild(managerImg);

    const managerContent = document.createElement('p');
    managerContent.textContent = "+91 709 183 6765";
    managerContact.appendChild(managerContent);

    contactContent.appendChild(managerContact)
}