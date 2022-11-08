import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import bg from './img/bg.jpg';
import drStrange from './img/Dr Strange.jpg';
import GOT from './img/GOT.jpg';
import IronMan from './img/IronMan.jpg';
import StarWars from './img/starWars.png';
import { main } from '@popperjs/core';


function renderMainPage(){
    const createdMainPage = createMainPage();
    const mainWrapper = document.querySelector('main');
    mainWrapper.appendChild(createdMainPage);


}

function createMainPage(){
    const mainWrapper = document.createElement('div');
    mainWrapper.className='aliCol';
    const col = document.createElement('div');
    col.className='col';
    const image1 = document.createElement('img');
    image1.src = drStrange;
    image1.height = 200px;
    image1.c
}

renderMainPage();