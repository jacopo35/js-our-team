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

const team_cont = document.querySelector(".team-container");

const nameUser = document.getElementById("name");

const roleUser = document.getElementById("role");

const img = document.getElementById("image");

const button = document.getElementById("addMemberButton");

// aggiunta foto

function addPhoto(array, container) {
    for (let i = 0; i < array.length; i++) {
const addTeam =`<div class="team-card">
                <div class="card-image">
                <img src="img/${team[i].image}"alt="${team[i].name}"/>
                </div>
                <div class="card-text">
                <h3>${team[i].name}</h3>
                <p>${team[i].role}</p>
                </div>
                </div>`
container.innerHTML += addTeam
    }
}

addPhoto(team, team_cont);

//aggiunta button 
button.addEventListener("click", function () {
    team_cont.innerHTML = ""
    const obj = {
        name: nameUser.value,
        role: roleUser.value,
        image: img.value
    }
    team.push(obj)

    addPhoto(team, team_cont);
})