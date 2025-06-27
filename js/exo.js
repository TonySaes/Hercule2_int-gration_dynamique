//Etape 1 : Importer le module
console.log('test 1...2...1...2');
//Etape 2 : Créer un objet
const hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
};
base.fillProfil(hercule)
// Etape 3 : création tableau
const friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
base.printFriends(friends);
base.setBestFriend(friends[0]);

// Etape 4 : Création DOM

const newTitle = document.createElement('h1');
newTitle.textContent = "Vous consultez le profil de Hercule";
newTitle.classList.add('banner__title');
document.querySelector("#header-banner").append(newTitle);

// Etape 5 : création boucle

for (let i = 0; i < 12; i++) {
    base.displayWork(i);
};

// Etape 6 : création condition
const currentHour = base.getHour();
const availibiltyElt = document.querySelector('#availability');
if (currentHour >= 8 && currentHour < 20) {
    availibiltyElt.textContent = 'Disponible';
    availibiltyElt.classList.remove('off');
}
else {
    availibiltyElt.textContent = 'Non disponible';
    availibiltyElt.classList.add('off');
}

// Etape 7 : création fonction

function generatePseudoName(name, department) {
    let pseudoName = `${name}-du-${department}`;
    return pseudoName;
};
document.querySelector("#profil-name").textContent = generatePseudoName(hercule.name, hercule.department);

// Etape 8 : évènement

document.querySelector("#menu-toggler").addEventListener('click', () => {
    const headerBannerElt = document.querySelector('#header-banner');
    headerBannerElt.classList.toggle('banner--open');
})

// Etape 9 : évènement formulaire contact

document.querySelector("#contact").addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector(".contact__input").value = '';
    alert('Hercule ne souhaite pas être dérangé.');
});

//Etpae 10 : Algo affichage %

function displayPourcentage(name) {
  const herculeVote = base.vote.hercule;
  const cesarVote = base.vote.cesar;
  const totalVotes = herculeVote + cesarVote;
  let purcent = 0;

  if (name === 'hercule') {
    purcent = Math.round((herculeVote / totalVotes) * 100);
  }
  else if (name === 'cesar') {
    purcent = Math.round((cesarVote / totalVotes) * 100);
  }

   const peoplePopularityArticleElt = document.querySelector(`#trends-${name}`);
   const peoplePopularityTextElt = peoplePopularityArticleElt.querySelector('.people__popularity')
   peoplePopularityTextElt.textContent = `${purcent}%`;

   const peoplePopularityBarElt = peoplePopularityArticleElt.querySelector('.people__bar');
   peoplePopularityBarElt.style.width = `${purcent}%`;
};
displayPourcentage('hercule');
displayPourcentage('cesar');