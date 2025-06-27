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
