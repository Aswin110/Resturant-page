
export const menuPage = () => {
    const menuContent = document.getElementById('container');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    heading.classList.add('heading');
    menuContent.appendChild(heading);

    const handCutSteak = document.createElement('div');
    handCutSteak.classList.add('menu');

    const handCutSteakHeading = document.createElement('h3');
    handCutSteakHeading.textContent = "Pittsburgh Blue steak";
    handCutSteak.appendChild(handCutSteakHeading);

    const handCutSteakContent = document.createElement('p');
    handCutSteakContent.textContent = "Did you know that there's a way to make your steak even juicier, simply by the cut? When a steak is hand-cut by a professional per your order, the level of liquid is preserved along with the ruby red color. Slicing a steak from a larger section of beef, called a primal or sub-primal cut, creates a fresh surface with the knife that doesn't have time to dry out or get tough. The best steakhouses in the world do this with every steak.";
    handCutSteak.appendChild(handCutSteakContent);

    const handCutSteakPrice = document.createElement('h3');
    handCutSteakPrice.textContent = "₹249";
    handCutSteak.appendChild(handCutSteakPrice);

    const handCutSteakImg = document.createElement('img');
    handCutSteakImg.classList.add('menuImg');

    handCutSteakImg.src = '/dist/Pittsburgh-Blue-steak.webp';
    handCutSteakImg.height = '200';
    handCutSteakImg.width = '200';
    handCutSteak.appendChild(handCutSteakImg);
    menuContent.appendChild(handCutSteak);

    const surfTurf = document.createElement('div');
    surfTurf.classList.add('menu');

    const surfTurfHeading = document.createElement('h3');
    surfTurfHeading.textContent = "Surf-Turf";
    surfTurf.appendChild(surfTurfHeading);

    const surfTurfContent = document.createElement('p');
    surfTurfContent.textContent = "Did you know that there's a way to make your steak even juicier, simply by the cut? When a steak is hand-cut by a professional per your order, the level of liquid is preserved along with the ruby red color. Slicing a steak from a larger section of beef, called a primal or sub-primal cut, creates a fresh surface with the knife that doesn't have time to dry out or get tough. The best steakhouses in the world do this with every steak.";
    surfTurf.appendChild(surfTurfContent);

    const surfTurfPrice = document.createElement('h3');
    surfTurfPrice.textContent = "₹299";
    surfTurf.appendChild(surfTurfPrice);

    const surfTurfImg = document.createElement('img');
    surfTurfImg.classList.add('menuImg');

    surfTurfImg.src = '/dist/surf-turf.jpg';
    surfTurfImg.height = '200';
    surfTurfImg.width = '200';

    surfTurf.appendChild(surfTurfImg);
    menuContent.appendChild(surfTurf)

    const filetSteak = document.createElement('div');
    filetSteak.classList.add('menu');

    const filetSteakHeading = document.createElement('h3');
    filetSteakHeading.textContent = "Filet Mignon";
    filetSteak.appendChild(filetSteakHeading);

    const filetSteakContent = document.createElement('p');
    filetSteakContent.textContent = "Filet mignon is the name of the steak cut from the beef tenderloin, a long, cylindrical muscle that runs along the spine. It’s one of the most expensive cuts of beef because the muscle doesn’t get much work, and it’s so tender you could cut through it with a fork. Because they’re already tender, they don’t require a marinade, so try pairing the steak instead with a flavorful sauce or butter like in merlot filet mignon.";
    filetSteak.appendChild(filetSteakContent);

    const filetSteakPrice = document.createElement('h3');
    filetSteakPrice.textContent = "₹199";
    filetSteak.appendChild(filetSteakPrice);

    const filetSteakImg = document.createElement('img');
    filetSteakImg.classList.add('menuImg');

    filetSteakImg.src = '/dist/filetSteak.jpg';
    filetSteakImg.height = '200';
    filetSteakImg.width = '200';

    filetSteak.appendChild(filetSteakImg);
    menuContent.appendChild(filetSteak)

}
