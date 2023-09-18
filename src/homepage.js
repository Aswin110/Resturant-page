
export const homePage = () => {
    const Content = document.getElementById('content');
    const homePageContent = document.getElementById('container');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Welcome to Soya';
    homePageContent.appendChild(heading);

    const homeImage = document.createElement('img');
    homeImage.classList.add('homeImage');
    homeImage.src = '/dist/food.jpg';
    homePageContent.appendChild(homeImage);

    const homeDescription = document.createElement('p');
    homeDescription.classList.add('homeDescription');
    homeDescription.textContent = 'We serve the best steak in the town.';
    homePageContent.appendChild(homeDescription);

    Content.appendChild(homePageContent);
}
