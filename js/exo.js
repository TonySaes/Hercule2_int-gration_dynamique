//Etape 1 : Importer le module
// console.log('test 1...2...1...2');

const herculeApp = {
    //Etape 2 : Créer un objet
    hercule: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },

    // Etape 3 : création tableau 
    friends: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],

    // Etape 4 : Création DOM
    titleCreation() { 
        const newTitle = document.createElement('h1');
        newTitle.textContent = "Vous consultez le profil de Hercule";
        newTitle.classList.add('banner__title');
        document.querySelector("#header-banner").append(newTitle);
    },

    // Etape 6 : création condition
    availibilityChange() {
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
    },

    // Etape 7 : création fonction
    generatePseudoName(name, department) {
    let pseudoName = `${name}-du-${department}`;
    return pseudoName;
    },
    fillPseudoName() {
        document.querySelector("#profil-name").textContent = herculeApp.generatePseudoName(herculeApp.hercule.name, herculeApp.hercule.department);
    },    

    // Etape 8 : création évènement menu
    toggleMenu() {
        document.querySelector("#menu-toggler").addEventListener('click', () => {
            const headerBannerElt = document.querySelector('#header-banner');
            headerBannerElt.classList.toggle('banner--open');
        });
    },

    // Etape 9 : évènement formulaire contact
    submitFormContact() {
        document.querySelector("#contact").addEventListener('submit', (event) => {
            event.preventDefault();
            document.querySelector(".contact__input").value = '';
            alert('Hercule ne souhaite pas être dérangé.');
        });
    },

    // Etape 10 : Algo affichage %
    displayPourcentage(name) {
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
    },

    //Etape 12 : Affichage activité terminées
    displayActvities() {
        document.querySelector("#activities").classList.remove('hidden');
        for (const element in base.activities) {
            if (base.activities[element].author === 'Hercule' && base.activities[element].finished === true) {
                const activityUlElt = document.querySelector(".tasks");
                const newLiTitleActivityElt = document.createElement('li');
                newLiTitleActivityElt.textContent = base.activities[element].title;
                activityUlElt.append(newLiTitleActivityElt);
            }  
        };
    },
    
    init() {
        base.fillProfil(herculeApp.hercule);
        base.printFriends(herculeApp.friends);

        // Etape 5 : création boucle
        base.setBestFriend(herculeApp.friends[0]);
        for (let i = 0; i < 12; i++) {
            base.displayWork(i);
        };

        herculeApp.titleCreation();
        herculeApp.availibilityChange();
        herculeApp.fillPseudoName();
        herculeApp.toggleMenu();
        herculeApp.submitFormContact();
        herculeApp.displayPourcentage('hercule');
        herculeApp.displayPourcentage('cesar');
        herculeApp.displayActvities();
    }
};

herculeApp.init();