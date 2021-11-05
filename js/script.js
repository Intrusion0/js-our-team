/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

/*

--DONE  1. Creo un array di oggetti in cui inserirò i vari membri con le loro informazioni => const membersTeam = [{}];
    --DONE  1.2 Aggiungerò le varie informazioni (nome - ruolo - foto) negli objects => {'name': 'tizio', 'role': 'x', 'photo': 'img/.x'};
--DONE  2. Creo un ciclo for in per controllare l'array di oggetti => for (let key in membersTeam);
    --DONE  2.1 Creo una variabile in cui conterrà il contenuto che dovrà stampare in html => let cardMember = "";
    --DONE  2.2 Copio il contenuto del container nell'Html e lo inserisco nel template literal presente nella variabile vuota creata precedentemente => cardMember += `contenuto-copiato`;
    --DONE  2.3 Sostituisco il nome, immagine e ruolo con le informazione dei vari object contenuti nell'array. => ${membersTeam[key].name} ecc..
    --DONE  2.4 Inserisco nell'html tramite la variabile che fa riferimento al container il contenuto della varibile che conterrà le varie card => contTeams.innerHTML = cardMember;
*/

let contTeams = document.querySelector('.team-container');
let cardMember = "";
let addMember = document.getElementById("addMemberButton");

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
  let newMember = addNewMembers(membersTeam[key].photo, membersTeam[key].name, membersTeam[key].role);

    contTeams.innerHTML = newMember;

    console.log(key, membersTeam[key]);
}

addMember.addEventListener("click", function() {
    let addName = document.getElementById("name").value;
    let addRole = document.getElementById("role").value;
    let addImage = document.getElementById("image").value;

    let newMember = addNewMembers(addImage, addName, addRole);

    contTeams.innerHTML = newMember;

    let newMemberTeams = {
        'name': addName,
        'role': addRole,
        'photo': addImage
    };

    membersTeam.push(newMemberTeams);

    console.log(addName);
    console.log(addRole);
    console.log(addImage);

    console.log(membersTeam);
});

// Funzioni

// Aggiunta nuovo membro
function addNewMembers(addPhoto, addName, addRole) {
    cardMember += `
      <div class="team-card">
      <div class="card-image">
        <img
          src="${addPhoto}" alt="${addName}"/>
      </div>
      <div class="card-text">
        <h3>${addName}</h3>
        <p>${addRole}</p>
      </div>
    </div>`

    return cardMember;
}