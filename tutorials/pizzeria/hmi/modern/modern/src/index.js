// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
import 'animate.css';


const body = document.querySelector('body');

body.addEventListener('click', startOrStopSound);

function startOrStopSound() {
  const myAudioPlayer = document.querySelector('#audioPlayer');

  if (myAudioPlayer.paused) myAudioPlayer.play();
  else myAudioPlayer.pause();
}

const MENU = [
  {
    id: 1,
    title: '4 fromages',
    content: 'Gruyère, Sérac, Appenzel, Gorgonzola, Tomates',
  },
  {
    id: 2,
    title: 'Vegan',
    content: 'Tomates, Courgettes, Oignons, Aubergines, Poivrons',
  },
  {
    id: 3,
    title: 'Vegetarian',
    content: 'Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives',
  },
  {
    id: 4,
    title: 'Alpage',
    content: 'Gruyère, Mozarella, Lardons, Tomates',
  },
  {
    id: 5,
    title: 'Diable',
    content: 'Tomates, Mozarella, Chorizo piquant, Jalapenos',
  },
];



function getAllTableLinesAsString(menu) {
  let pizzaTableLines = '';


  /* pourquoi dans l'incrémentation de pizzaTableLines on fait
  `` et pas '' ? ...
  */
  menu?.forEach((pizza) => {
    pizzaTableLines += `<tr>
    <td>${pizza.title}</td>
    <td>${pizza.content}</td>
    </tr>`;
  });

  return pizzaTableLines;
}

function addLinesToTable(tableLines) {
  const menuTable = `
  <div class="table-responsive pt-5">
    <table class="table table-danger">
      <tr>
        <th>Pizza</th>
        <th>Description</th>
      </tr>
      ${tableLines}    
    </table>
  </div>
  `;
  return menuTable;
}

function getMenuTableAsString(menu) {
  const menuTableLines = getAllTableLinesAsString(menu);
  const menuTable = addLinesToTable(menuTableLines);
  return menuTable;
}

function renderMenuFromString(menu) {
  const menuTableAsString = getMenuTableAsString(menu);
  const main = document.querySelector('main');

  main.innerHTML += menuTableAsString;
}

renderMenuFromString(MENU);
