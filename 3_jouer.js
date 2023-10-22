
// --------------------------- ZONE DE JEU -------------------------

// Affichage des dés
let de1 = document.getElementById("de_un");
let de2 = document.getElementById("de_deux");
let de3 = document.getElementById("de_trois");
resultats = [];

// Lancer tous les dés de 1 à 6
function lancerAleatoireDes() {
    de1.value = Math.floor(Math.random() * 6) + 1;
    resultats.push(de1.value);
    de2.value = Math.floor(Math.random() * 6) + 1;
    resultats.push(de2.value);
    de3.value = Math.floor(Math.random() * 6) + 1;
    resultats.push(de3.value);
    attribuerFaceImage();
    listeJoueurs[nombreJoueur].push(resultats);
    // alert(listeJoueurs);
}

// Attribuer la face du dé à une image
function attribuerFaceImage() {
    if (de1.value === 1) {
        de1.src = "image/dé_face_un.png";
    
    } else if (de1.value === 2) {
        de1.src = "image/dé_face_deux.png";
    
    } else if (de1.value === 3) {
        de1.src = "image/dé_face_trois.png";
    
    } else if (de1.value === 4) {
        de1.src = "image/dé_face_quatre.png";
    
    } else if (de1.value === 5) {
        de1.src = "image/dé_face_cinq.png";
    
    } else if (de1.value === 6) {
        de1.src = "image/dé_face_six.png";
    }

    if (de2.value === 1) {
        de2.src = "image/dé_face_un.png";
    
    } else if (de2.value === 2) {
        de2.src = "image/dé_face_deux.png";
    
    } else if (de2.value === 3) {
        de2.src = "image/dé_face_trois.png";
    
    } else if (de2.value === 4) {
        de2.src = "image/dé_face_quatre.png";
    
    } else if (de2.value === 5) {
        de2.src = "image/dé_face_cinq.png";
    
    } else if (de2.value === 6) {
        de2.src = "image/dé_face_six.png";
    }
    
    if (de3.value === 1) {
        de3.src = "image/dé_face_un.png";
    
    } else if (de3.value === 2) {
        de3.src = "image/dé_face_deux.png";
    
    } else if (de3.value === 3) {
        de3.src = "image/dé_face_trois.png";
    
    } else if (de3.value === 4) {
        de3.src = "image/dé_face_quatre.png";
    
    } else if (de3.value === 5) {
        de3.src = "image/dé_face_cinq.png";
    
    } else if (de3.value === 6) {
        de3.src = "image/dé_face_six.png";
    }

}



// Input checkbox
// Checkbox permet de relancer le dé checked
let checkboxDe1 = document.getElementById("checkbox_un");
let checkboxDe2 = document.getElementById("checkbox_deux");
let checkboxDe3 = document.getElementById("checkbox_trois");

function choisirRelanceDeChecked() {
    if (checkboxDe1.checked == true) {
        de1.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][0] = de1.value;
        attribuerFaceImage();
    }
    
    if (checkboxDe2.checked == true) {
        de2.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][1] = de2.value;
        attribuerFaceImage();
    }
    
    if (checkboxDe3.checked == true) {
        de3.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][2] = de3.value;
        attribuerFaceImage();
    }

    if (checkboxDe1.checked == false && checkboxDe2.checked == false && checkboxDe3.checked == false) {
        alert("Sélectionnez un dé minimum à remplacer");
        nombreLancer++;
    }
    
    checkboxDe1.checked = false;
    checkboxDe2.checked = false;
    checkboxDe3.checked = false;
}

function devoirRelanceDeChecked() {
    if (checkboxDe1.checked == true) {
        de1.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][0] = de1.value;
        attribuerFaceImage();
    }
    
    if (checkboxDe2.checked == true) {
        de2.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][1] = de2.value;
        attribuerFaceImage();
    }
    
    if (checkboxDe3.checked == true) {
        de3.value = Math.floor(Math.random() * 6) + 1;
        listeJoueurs[nombreJoueur][1][2] = de3.value;
        attribuerFaceImage();
    }

    if (checkboxDe1.checked == false && checkboxDe2.checked == false && checkboxDe3.checked == false) {
        alert("Sélectionnez un dé minimum à remplacer");
        nombreLancerObligatoire++;
        return;
    }

    checkboxDe1.checked = false;
    checkboxDe2.checked = false;
    checkboxDe3.checked = false;
}



// Label variable
let labelVariable = document.getElementById("label_variable");
let labelQuestionJouer = labelVariable.innerHTML;
let labelQuestionRelancer = labelVariable.innerHTML;
let labelDoitJouer = labelVariable.innerHTML;
let labelDoitRelancer = labelVariable.innerHTML;
let labelQuestionRelancerManche = labelVariable.innerHTML;
let nombreLancer = 3;
let nombreLancerObligatoire = Number;

function labelVouloirJouer() {
    labelQuestionJouer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", voulez-vous lancer les dés ?";
    return;
}

function labelVouloirRelancer() {
    if (nombreLancer === 2) {
        labelQuestionRelancer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", voulez-vous relancer les dés ? <br> Il reste " + nombreLancer + " lancés maximum <br> Sélectionner un dé pour le modifier"; 
        return;

    } else if (nombreLancer === 1) {
        labelQuestionRelancer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", voulez-vous relancer les dés ? <br> Il reste " + nombreLancer + " lancé maximum <br> Sélectionner un dé pour le modifier"; 
        return;
        
    } else {
        afficherResultatJoueur();
        labelDevoirJouer();
        return;
    }
}

function labelDevoirJouer() {
    nombreLancerObligatoire = 3 - nombreLancer;
    const nombreTotalJoueurs = listeJoueurs.length;
    nombreJoueur++;
    resultats = [];
    
    // Alert de vérification à conserver
    // alert("nombre total de joueurs est de " + nombreTotalJoueurs);
    // alert("nombre de lancé(s) restant(s) : " + nombreLancer);    
    // alert("nombre de lancé obligatoire : " + nombreLancerObligatoire);
    // alert(listeJoueurs);    
    
    while (nombreJoueur != nombreTotalJoueurs) {
        if (nombreLancerObligatoire === 2 || nombreLancerObligatoire === 3) {
            labelDoitJouer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", vous devez jouer " + nombreLancerObligatoire + " lancés";
            
        } else if (nombreLancerObligatoire === 1) {
            labelDoitJouer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", vous devez jouer " + nombreLancerObligatoire + " lancé";
            
        } else {
            alert("Erreur LabelDevoirJouer");
        }
        return;
    }
    
    // alert("afficher classement joueurs");
    // alert("classement : " + classement);
    afficherGagnant();
    return;
}

function labelDevoirRelancer() {
    if (nombreLancerObligatoire === 2) {
        labelDoitRelancer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", vous devez jouer " + nombreLancerObligatoire + " lancés <br> Sélectionner un dé pour le modifier"; 
        return;

    } else if (nombreLancerObligatoire === 1) {
        labelDoitRelancer = labelVariable.innerHTML = listeJoueurs[nombreJoueur][0] + ", vous devez jouer " + nombreLancerObligatoire + " lancé <br> Sélectionner un dé pour le modifier"; 
        return;
        
    } else {
        afficherResultatJoueur();
        labelDevoirJouer();
        return;
    }
}

function relancerEventBoutonOui() {
    boutonValidationOui.addEventListener("click", boutonOui);
    return;
}

function relancerManche() {
    chercherIndexGagnantListeJoueurs();
    renseignementComplet = true;
    resetPartielRelance();
    creerLiJoueursRelance();
    labelVouloirJouer();
}



// bouton de validation oui / non
let boutonValidationOui = document.getElementById("oui");
let boutonValidationNon = document.getElementById("non");

function boutonOui() {
    if (labelVariable.innerHTML === labelQuestionJouer) {
        lancerAleatoireDes();
        nombreLancer--;
        if (verifierNenette() == true) {
            afficherResultatJoueur();
            nenette = true;
            labelDevoirJouer();
            return;
        } else {
            labelVouloirRelancer();
            nenette = false;
            afficherInputCheckox();
            return;
        }

        
    } else if (labelVariable.innerHTML === labelQuestionRelancer) {
        while (nombreLancer > 0) {
            nombreLancer--;
            choisirRelanceDeChecked();
            if (verifierNenette() == true) {
                afficherResultatJoueur();
                nenette = true;
                afficherInputCheckox();
                labelDevoirJouer();
                return;
            } else {
                labelVouloirRelancer();
                nenette = false;
                afficherInputCheckox();
                return;
            }
        }
        alert("Erreur le joueur suivant devrait déjà jouer ou la manche devrait être terminée");
    
    } else if (labelVariable.innerHTML === labelDoitJouer) {
        lancerAleatoireDes();
        nombreLancerObligatoire--;
        // alert(listeJoueurs);
        // alert(listeJoueurs[nombreJoueur]);
        // alert(listeJoueurs[nombreJoueur][1][0]);
        if (verifierNenette() == true) {
            afficherResultatJoueur();
            nenette = true;
            labelDevoirJouer();
            return;
        } else {
            labelDevoirRelancer();
            nenette = false;
            afficherInputCheckox();
            return;
        }
    
    } else if (labelVariable.innerHTML === labelDoitRelancer) {
        while (nombreLancerObligatoire > 0) {
            nombreLancerObligatoire--;
            devoirRelanceDeChecked();
            // alert(listeJoueurs[nombreJoueur]);
            if (verifierNenette() == true) {
                afficherResultatJoueur();
                nenette = true;
                afficherInputCheckox();
                labelDevoirJouer();
                return;
            } else {
                labelDevoirRelancer();
                nenette = false;
                afficherInputCheckox();
                return;
            }
        }
        labelDevoirJouer();
        return;
    
    } else if (labelVariable.innerHTML === labelQuestionRelancerManche) {
        // alert("Fonction de relance manche à faire");
        if (confirm("Confirmez-vous la relance d'une manche ? ")) {
            relancerManche()
            return;
        }
            
    } else {
        alert("Erreur boutonOui");
    }
}

function boutonNon() {
    if (labelVariable.innerHTML === labelQuestionRelancer) {
        // alert("afficher résultats dans la liste des joueurs");
        afficherResultatJoueur();
        labelDevoirJouer();
        afficherInputCheckox();
        return;

    } else if (confirm("Souhaitez-vous revenir au menu principal ? ")) {
            renseignementComplet = false;
            revenirMenuPrincipal();
            return;
    }
}

boutonValidationOui.addEventListener("click", boutonOui);
boutonValidationNon.addEventListener("click", boutonNon);
