import './style.css';
import Lasagna from './images/lasagna-pic.jpg';
import Pizza from './images/pizza-pic.jpg';
import Juice from './images/juice-pic.jpg';
import Soup from './images/soup-pic.jpg';
import Pudding from './images/pudding-pic.jpg';
import Icecream from './images/icecream-pic.jpg';

//Cache
const container = document.getElementById('container');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const button_aboutUs = document.createElement('button');
const button_menu = document.createElement('button');
const button_contact = document.createElement('button');
const button_container = document.createElement('div');

header.innerHTML = `
<div><h1>Pepper Emporium</h1></div>
`

button_container.classList.add('button-menu');

button_aboutUs.textContent = 'About Us';
button_menu.textContent = 'Menu';
button_contact.textContent = 'Contact';

//Treating images
const myLasagna = new Image();
myLasagna.src = Lasagna;

const myPizza = new Image();
myPizza.src = Pizza;

const mySoup = new Image();
mySoup.src = Soup;

const myJuice = new Image();
myJuice.src = Juice;

const myPudding = new Image();
myPudding.src = Pudding;

const myIcecream = new Image();
myIcecream.src = Icecream;


//Define Main element value
button_menu.addEventListener('click', ()=> defineMainContent('menu'));
button_aboutUs.addEventListener('click', ()=> defineMainContent('aboutUs'));
button_contact.addEventListener('click', ()=> defineMainContent('contact'));

function defineMainContent (button) {
    if(button === 'aboutUs') {
        highlightButton('about-us');
        main.innerHTML = `
            <h1>ABOUT US</h1>
            <div class="about-us">
                <div class="about-us-cont">
                    <h2>History</h2>
                        <p>
                            Our emporium was born because our love for spiciness.
                            Since 1910 we are commited to bring the best experience when we talk about Pepper.
                            Here you will find the best pepper in the world to fell your soul burn with this delicius
                            and unique flavor
                        </p>
                </div>
                <div class="about-us-cont">
                    <h2>Hours</h2>
                    <ul>
                        <li><strong>Sunday:</strong> 10:00 - 22:00</li>
                        <li><strong>Monday:</strong> 10:00 - 20:00</li>
                        <li><strong>Tuesday:</strong> 10:00 - 20:00</li>
                        <li><strong>Wednesday:</strong> 10:00 - 20:00</li>
                        <li><strong>Thursday:</strong> 10:00 - 20:00</li>
                        <li><strong>Friday:</strong> 10:00 - 22:00</li>
                        <li><strong>Saturday:</strong> 10:00 - 22:00</li>
                    </ul>
                </div>
                <div class="about-us-cont">
                    <h2>Adress</h2>
                    <p> 000 Dos Bobos, Caroxinha, Alagoinha</p>
                </div>
            </div>
        `
    } else if (button === 'menu') {
        highlightButton('menu');
        main.innerHTML = `
            <div>
                <h1>MENU</h1>
                <div class="menu-grid">
                    <div>
                        <div class="lasagna-img img"></div>
                        <p>Lasagna Arretada</p>
                    </div>
                    <div>
                        <div class="pizza-img img"></div>
                        <p>Pizza Caliente</p>
                    </div>
                    <div>
                        <div class="soup-img img"></div>
                        <p>Soul Burner soup</p>
                    </div>
                    <div>
                        <div class="juice-img img"></div>
                        <p>Devil Sweat</p>
                    </div>
                    <div>
                        <div class="pudding-img img"></div>
                        <p>fluffy Pain</p>
                    </div>
                    <div>
                        <div class="icecream-img img"></div>
                        <p>Cold Burn Icecream</p>
                    </div>
                </div>
            </div>
        `
        document.querySelector('.lasagna-img').appendChild(myLasagna);
        document.querySelector('.pizza-img').appendChild(myPizza);
        document.querySelector('.soup-img').appendChild(mySoup);
        document.querySelector('.juice-img').appendChild(myJuice);
        document.querySelector('.pudding-img').appendChild(myPudding);
        document.querySelector('.icecream-img').appendChild(myIcecream);
    } else {
        highlightButton('contact');
        main.innerHTML = `
            <div>
            <h1>CONTACT US!</h1>
                <div class="contact">
                    <p><strong>Phone:</strong> (xx)98756-4321</p>
                    <p><strong>Email:</strong> realadress@trustme.com</p>
                </div>
            </div>
        `
    }
};

function highlightButton (currentButton) {
    if(currentButton === 'about-us') {
        button_menu.classList.remove('highlight');
        button_contact.classList.remove('highlight');

        button_aboutUs.classList.add('highlight');
    } else if (currentButton === 'menu'){
        button_aboutUs.classList.remove('highlight');
        button_contact.classList.remove('highlight');

        button_menu.classList.add('highlight');
    } else {
        button_aboutUs.classList.remove('highlight');
        button_menu.classList.remove('highlight');

        button_contact.classList.add('highlight');
    }
}

defineMainContent('aboutUs');

//Appending elements in the DOM
container.appendChild(header);
button_container.appendChild(button_aboutUs);
button_container.appendChild(button_menu);
button_container.appendChild(button_contact);
header.appendChild(button_container);

container.appendChild(main);