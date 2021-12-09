/*
In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let containerCards = document.querySelector('.team-container');
makeCards(team, containerCards);

function makeCards(array, container) {
    container.innerHTML = '';
    for (let index = 0; index < array.length; index++) {
        const object = array[index];
        const templateCard = `
<div class="team-card">
<div class="card-image">
 <img src="img/${object.image}"alt="${object.name}"/>
</div>
<div class="card-text">
    <h3>${object.name}</h3>
         <p>${object.role}</p>
</div>
</div>`;
    container.innerHTML += templateCard;
    }
}