
export const contactPage = () => {
    const contactContent = document.getElementById('container');

    const heading = document.createElement('h1');
    heading.textContent = "Contact Us"
    contactContent.appendChild(heading);

    const reservationContact = document.createElement('div');
    const reservationHeading = document.createElement('h3');
    reservationHeading.textContent = "For Reservation";
    reservationContact.appendChild(reservationHeading);

    const reservationContent = document.createElement('p');
    reservationContent.textContent = "+91 860 183 6765";
    reservationContact.appendChild(reservationContent);

    const reservationImg = document.createElement('img')
    reservationImg.src = '/dist/reservation.jpg';
    reservationImg.height = '150';

    reservationContact.appendChild(reservationImg);
    contactContent.appendChild(reservationContact);

    const orderContact = document.createElement('div');
    const orderHeading = document.createElement('h3');
    orderHeading.textContent = "Ordering Service";
    orderContact.appendChild(orderHeading);

    const orderContent = document.createElement('p');
    orderContent.textContent = "+91 976 183 6765";
    orderContact.appendChild(orderContent);

    const orderImg = document.createElement('img')
    orderImg.src = '/dist/order.jpg';
    orderImg.height = '150';

    orderContact.appendChild(orderImg);
    contactContent.appendChild(orderContact);

    const managerContact = document.createElement('div');
    const managerHeading = document.createElement('h3');
    managerHeading.textContent = "Manager";
    managerContact.appendChild(managerHeading);

    const managerContent = document.createElement('p');
    managerContent.textContent = "+91 709 183 6765";
    managerContact.appendChild(managerContent);

    const managerImg = document.createElement('img')
    managerImg.src = '/dist/Manager.jpg';
    managerImg.height = '150';

    managerContact.appendChild(managerImg);
    contactContent.appendChild(managerContact)
}