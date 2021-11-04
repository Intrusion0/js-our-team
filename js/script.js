/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

/*

1. Creo un array di oggetti in cui inserirò i vari membri con le loro informazioni => const membersTeam = [{}];
    1.2 Aggiungerò le varie informazioni (nome - ruolo - foto) negli objects => {'name': 'tizio', 'role': 'x', 'photo': 'img/.x'};
2. Stampo le card in HTML => .append    
*/

let contCardImgTeam = document.querySelector('.card-image');
let contCardTextTeam = document.querySelector('.card-text');
let contMembersTeam = document.querySelector('.team-card');
let contTeams = document.querySelector('.team-container');
let cardMember = "";
let cardTextMember = "";

const membersTeam = [
    {
       'name': 'Wayne Barnett',
       'role': 'Founder & CEO',
       'photo': 'img/wayne-barnett-founder-ceo.jpg' 
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'photo': 'img/angela-caroll-chief-editor.jpg' 
     },
     {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'photo': 'img/walter-gordon-office-manager.jpg' 
     },
     {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'photo': 'img/angela-lopez-social-media-manager.jpg' 
     },
     {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'photo': 'img/scott-estrada-developer.jpg' 
     },
     {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'photo': 'img/barbara-ramos-graphic-designer.jpg' 
     }
];

console.log(membersTeam);
for (let key in membersTeam) {
    cardMember += `
    <div class="team-card">
    <div class="card-image">
      <img
        src="${membersTeam[key].photo}" alt="${membersTeam[key].name}"/>
    </div>
    <div class="card-text">
      <h3>${membersTeam[key].name}</h3>
      <p>${membersTeam[key].role}</p>
    </div>
  </div>`

    contTeams.innerHTML = cardMember;
    
    console.log(key, membersTeam[key]);
}
