
export const homePage = () => {
    const Content = document.getElementById('content');
    const homePageContent = document.getElementById('container');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'Welcome to SteakHouse';
    homePageContent.appendChild(heading);

    const homeImage = document.createElement('img');
    homeImage.classList.add('homeImage');
    homeImage.src = '/dist/food.jpg';
    homeImage.height = '500';
    homePageContent.appendChild(homeImage);

    const homeDescription = document.createElement('p');
    homeDescription.classList.add('homeDescription');
    homeDescription.textContent = "An evening out at a steakhouse is an occasional indulgence we like to enjoy now and then. It’s a great way to celebrate a birthday, anniversary or maybe to impress a first date.It offers hand-cut steaks, as well as surf and turf steak combos. There are also ribs, chicken and fish dishes on the menu, so no matter what, there is something to satisfy the whole family.";
    homeDescription.style.padding = '10px';
    homePageContent.appendChild(homeDescription);


    Content.appendChild(homePageContent);
}
