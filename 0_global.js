// aide : 
// création de li par js
// https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6279381-definissez-des-methodes-dinstance-et-des-proprietes#/id/r-7176224
// bouton confirmer
// https://codepen.io/quentin-laurent/pen/gOLEmey


// ---------------------- FONCTION DE CONTROLE --------------------

// Reset de la liste des joueurs
function resetListeJoueurs() {
    listeJoueurs = [];
}

// Reset le numero des joueurs
function resetNumeroJoueurs() {
    numeroJoueur = 0;
}

// Reset de l'affichage de la liste des noms
function resetAffichageNoms() {
    afficherListeJoueurs.innerHTML = "";
}

// Reset du nombre de lancé
function resetNombreLancer() {
    nombreLancer = 3;
}

// Reset du nombre de lancé
function resetClassement() {
    classement = [];
}

// Reset résultats des joueurs suite à une relance de manche
function resetResultats(){
    for (let index=0; index<listeJoueurs.length; index++) {
        listeJoueurs[index].pop();
    }
    // alert("liste Joueurs resetResultats() : " + listeJoueurs);
    return;
}

// Reset complet des renseignements
function resetComplet() {
    nombreJoueurInput.value = "";
    nomJoueurInput.value = "";
    titre_afficher_joueurs.innerHTML = "";
    listeXJoueurs.innerHTML = "Liste des joueurs : ";
    resetListeJoueurs();
    resetNumeroJoueurs();
    resetAffichageNoms();
    resetNombreLancer();
    resetClassement();
}

// Reset partiel pour relancer une manche
function resetPartielRelance() {
    resetAffichageNoms();
    resetNumeroJoueurs();
    resetNombreLancer();
    resetClassement();
}


// ---------------------- FONCTION D'AFFICHAGE --------------------

// Affichage du bouton Suivant ou Retour
function afficherSuivantRetour() {
    const boutonSuivant = document.getElementById("suivant");
    const boutonRetour = document.getElementById("retour");

    if (renseignementComplet === true) {
        boutonSuivant.style.display = "inline";
        boutonRetour.style.display = "none";
    } else {
        boutonSuivant.style.display = "none";
        boutonRetour.style.display = "inline";
    }
}

// Retour au menu principal sans confirmation
function revenirMenuPrincipal() {
    afficherMenuPrincipal();
    positionAfficherJoueurs();
    mefAfficherJoueurs()
    resetComplet();
    document.getElementById("retour");
    afficherSuivantRetour();
    return;
}

// Montrer/masquer menu principal
function afficherMenuPrincipal() {
    const divQuatreDeuxUn = document.getElementById("quatre_deux_un");
    const divRenseignements = document.getElementById("renseignements");
    const divZoneJeu = document.getElementById("zone_jeu");

    if (renseignementComplet === true) {
        divRenseignements.style.display = "none";
        divQuatreDeuxUn.style.display = "none";
        divZoneJeu.style.display = "block";
    } else {
        divRenseignements.style.display = "block";
        divQuatreDeuxUn.style.display = "block";
        divZoneJeu.style.display = "none";
    }
}

// Modifier position div afficher joueurs
function positionAfficherJoueurs() {
    const divAfficherJoueurs = document.getElementById("afficher_joueurs");

    if (renseignementComplet === true) {
        divAfficherJoueurs.style.position = "absolute";
        divAfficherJoueurs.style.left = "0";
        divAfficherJoueurs.style.top = "35%";
    } else {
        divAfficherJoueurs.style.position = "";
    }
}

// Modifier MEF titre_afficher_joueurs au déplacement 
function mefAfficherJoueurs() {
    const divTitreAfficherJoueurs = document.getElementById("titre_afficher_joueurs");
    const divListeXJoueurs = document.getElementById("liste_x_joueurs");

    if (renseignementComplet === true) {
        divTitreAfficherJoueurs.style.fontWeight = "bold";
        divTitreAfficherJoueurs.style.textDecoration = "underline";
        divListeXJoueurs.style.fontWeight = "normal";
    } else {
        divTitreAfficherJoueurs.style.fontWeight = "normal";
        divTitreAfficherJoueurs.style.textDecoration = "none";
        divListeXJoueurs.style.fontWeight = "bold";
    }
}

// Masquer checkbox pour le premier lancé uniqument
function afficherInputCheckox() {
    const divInputCheckbox = document.getElementById("input_checkbox");
    if (nenette == true) {
        divInputCheckbox.style.display = "none";
        nenette = false;
        return;
    } else {
        if (labelVariable.innerHTML === labelQuestionRelancer || labelVariable.innerHTML === labelDoitRelancer) {
            divInputCheckbox.style.display = "flex";
        } else {
            divInputCheckbox.style.display = "none";
        }
    }
}
