
// ---------------------- ACTION BOUTON --------------------

// Action lors de l'utilisation de Suivant
function actionSuivant() {
    afficherMenuPrincipal();
    positionAfficherJoueurs();
    mefAfficherJoueurs()
    
    titre_afficher_joueurs.innerHTML = "Score : ";
    document.getElementById("suivant");
    renseignementComplet = false;
    afficherSuivantRetour();
    labelVouloirJouer();
    return;
}

// Action lors de l'utilisation de Retour
function actionRetour() {
    if (confirm("Souhaitez-vous revenir au menu principal ? ")) {
        renseignementComplet = false;
        afficherMenuPrincipal();
        positionAfficherJoueurs();
        mefAfficherJoueurs()
        
        resetComplet();
        document.getElementById("retour");
        afficherSuivantRetour();
        return;
    }
}

