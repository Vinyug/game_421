
// ---------------------- RENSEIGNEMENTS JOUEURS --------------------

// Récupération du nombre de joueurs
const nombreJoueurInput = document.getElementById("recuperer_nombre_joueur");
const boutonConfirmerNombreJoueur = document.getElementById("confirmer_nombre_joueur");
const listeXJoueurs = document.getElementById("liste_x_joueurs");

let nombreJoueur;

function confirmerNombreJoueur() {
    nombreJoueur = parseInt(nombreJoueurInput.value);
    
    if(isNaN(nombreJoueur)) {
        alert("La valeur saisie doit être un nombre");
        return;
        
    } else if (nombreJoueur < 2) {
        alert("Vous devez être au minimum 2 joueurs");
        console.error("Vous devez être au minimum 2 joueurs");
        return;
        
    } else if (nombreJoueur > 10) {
        alert("Le nombre maximal de joueurs est 10");
        console.error("Le nombre maximal de joueurs est 10");
        return;
    }
    
    listeXJoueurs.innerHTML = "Liste des " + nombreJoueur + " joueurs : ";
    
    resetListeJoueurs();
    resetNumeroJoueurs();
    resetAffichageNoms();
}

boutonConfirmerNombreJoueur.addEventListener("click", confirmerNombreJoueur);
boutonConfirmerNombreJoueur.addEventListener("click", confirmerNombreJoueur);



// Récupération du nom des joueurs
const nomJoueurInput = document.getElementById("recuperer_nom_joueur");
const boutonConfirmerNomJoueur = document.getElementById("confirmer_nom_joueur");
const afficherListeJoueurs = document.getElementById("afficher_liste_joueurs");

let listeJoueurs = [];
let numeroJoueur = 0;
let renseignementComplet = false;

function confirmerNomJoueur() {
    nomJoueur = nomJoueurInput.value;

    // Empêche la validation si le nombre de joueur n'est pas complété
    if (nombreJoueur === undefined){
        alert("Le nombre de joueur est manquant");
        return;
    } 

    // Vérifier valeurs saisies
    while (nomJoueur == "" || nomJoueur == "&" || nomJoueur == false) {
        alert("Vous devez saisir au minimum un caractère (hors espace ou &)")
        return;
    };

    // Vérifier si nom existe
    for (let i=0; i<listeJoueurs.length; i++) {
        if (nomJoueur !== listeJoueurs[i][0]) {
            
        } else {
            alert("Ce nom existe déjà");
            return;
        }     
    }

    while (nombreJoueur > 0) {
        nombreJoueur--;
        numeroJoueur++;
        listeJoueurs.push([nomJoueur]);
        creerLiJoueur(numeroJoueur);
        if (nombreJoueur > 1) {
            titre_afficher_joueurs.innerHTML = "Il reste " + nombreJoueur + " joueurs à confirmer";
            nomJoueurInput.value = "";
            
        } else if (nombreJoueur === 1) {
            titre_afficher_joueurs.innerHTML = "Il reste " + nombreJoueur + " joueur à confirmer";
            nomJoueurInput.value = "";
            
        } else {
            titre_afficher_joueurs.innerHTML = "Tous les joueurs sont inscrits";
            renseignementComplet = true;
            afficherSuivantRetour();
        }
        return;
    }
    
    alert("Tous les joueurs sont enregistrés");
}

function creerLiJoueur(numeroJoueur) {
    let liIdJoueur = document.createElement("li");
    liIdJoueur.appendChild(document.createTextNode("N°" + numeroJoueur + " : " + nomJoueur));
    afficherListeJoueurs.appendChild(liIdJoueur);
    liIdJoueur.id = "index_joueur_" + (numeroJoueur - 1);
    return;
}

function creerLiJoueursRelance() {
    for (let numeroJoueur=0; numeroJoueur<listeJoueurs.length; numeroJoueur++) {
        let liIdJoueur = document.createElement("li");
        liIdJoueur.appendChild(document.createTextNode("N°" + (numeroJoueur + 1) + " : " + listeJoueurs[numeroJoueur]));
        afficherListeJoueurs.appendChild(liIdJoueur);
        liIdJoueur.id = "index_joueur_" + (numeroJoueur);
    }
    return nombreJoueur = 0;
}


boutonConfirmerNomJoueur.addEventListener("click", confirmerNomJoueur);
