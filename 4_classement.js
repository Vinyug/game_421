
// ---------------------- CLASSEMENT --------------------

// AFFICHAGE RESULTATS PAR JOUEUR DANS LISTE JOUEURS 

function trierScoreDecroissant() {
    scoreJoueur = listeJoueurs[nombreJoueur][1];
    scoreJoueur.sort();
    scoreJoueur.reverse();
    ordreCombinaison();
    attribuerImageScore();
    scoreJoueur = scoreJoueur.join("");
    return;
}

function attribuerImageScore() {
    if (scoreJoueur[0] === 1) {
        scoreJoueur[0] = '<img class="score_un" src="image/dé_face_un.png" />';
        
    } else if (scoreJoueur[0] === 2) {
        scoreJoueur[0] = '<img class="score_un" src="image/dé_face_deux.png" />';
        
    } else if (scoreJoueur[0] === 3) {
        scoreJoueur[0] = '<img class="score_un" src="image/dé_face_trois.png" />';
        
    } else if (scoreJoueur[0] === 4) {
        scoreJoueur[0] = '<img class="score_un" src="image/dé_face_quatre.png" />';
    
    } else if (scoreJoueur[0] === 5) {
        scoreJoueur[0] = '<img class="score_un" src="image/dé_face_cinq.png" />';
    
    } else if (scoreJoueur[0] === 6) {
    scoreJoueur[0] = '<img class="score_un" src="image/dé_face_six.png" />';
    }

    if (scoreJoueur[1] === 1) {
        scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_un.png" />';
        
    } else if (scoreJoueur[1] === 2) {
        scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_deux.png" />';
        
    } else if (scoreJoueur[1] === 3) {
        scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_trois.png" />';
        
    } else if (scoreJoueur[1] === 4) {
        scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_quatre.png" />';
    
    } else if (scoreJoueur[1] === 5) {
        scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_cinq.png" />';
    
    } else if (scoreJoueur[1] === 6) {
    scoreJoueur[1] = '<img class="score_deux" src="image/dé_face_six.png" />';
    }
    
    if (scoreJoueur[2] === 1) {
        scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_un.png" />';
        
    } else if (scoreJoueur[2] === 2) {
        scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_deux.png" />';
        
    } else if (scoreJoueur[2] === 3) {
        scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_trois.png" />';
        
    } else if (scoreJoueur[2] === 4) {
        scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_quatre.png" />';
    
    } else if (scoreJoueur[2] === 5) {
        scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_cinq.png" />';
    
    } else if (scoreJoueur[2] === 6) {
    scoreJoueur[2] = '<img class="score_trois" src="image/dé_face_six.png" />';
    }
}

function afficherResultatJoueur() {
    // alert("nombreJoueur : " + nombreJoueur);
    // alert("index_joueur_" + nombreJoueur.toString());
    // alert(listeJoueurs[nombreJoueur][1]);
    let modifierLabelLi = document.getElementById("index_joueur_" + nombreJoueur.toString());
    trierScoreDecroissant();
    modifierLabelLi.innerHTML = "N°" + (nombreJoueur + 1) + " : " + listeJoueurs[nombreJoueur][0] + scoreJoueur;
    return;
}



// ATTRIBUER SCORE SUIVANT COMBINAISON
classement = [];

function ordreCombinaison() {
    nomJoueur = listeJoueurs[nombreJoueur][0];
    scoreJoueur = scoreJoueur.join("");  // pour permettre d'attribuer une valeur au score
    // alert("score Joueur : " + scoreJoueur);
    if (scoreJoueur == 421) {
        valeurScore = 1;
        classement.push([nomJoueur,valeurScore]);
    
    } else if (scoreJoueur == 111) {
        valeurScore = 2;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 611) {
        valeurScore = 3;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 666) {
        valeurScore = 4;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 511) {
        valeurScore = 5;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 555) {
        valeurScore = 6;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 411) {
        valeurScore = 7;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 444) {
        valeurScore = 8;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 311) {
        valeurScore = 9;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 333) {
        valeurScore = 10;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 211) {
        valeurScore = 11;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 222) {
        valeurScore = 12;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 654) {
        valeurScore = 13;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 543) {
        valeurScore = 14;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 432) {
        valeurScore = 15;
        classement.push([nomJoueur,valeurScore]);

    } else if (scoreJoueur == 321) {
        valeurScore = 16;
        classement.push([nomJoueur,valeurScore]);
   
    } else if (scoreJoueur == 221) {
        valeurScore = 666;
        classement.push([nomJoueur,valeurScore]);
        alert("Nénette, votre manche se termine !");

    } else if (322 <= scoreJoueur <= 665) {
        valeurScore = 17 + 665 - scoreJoueur;
        classement.push([nomJoueur,valeurScore]);

    } else {
        alert("Erreur ordre combinaison");

    }
    indexerScoreJoueur();
    return;
}

function indexerScoreJoueur() {
    scoreJoueurDe1 = parseInt(scoreJoueur.slice(0,1));  
    scoreJoueurDe2 = parseInt(scoreJoueur.slice(1,2));  
    scoreJoueurDe3 = parseInt(scoreJoueur.slice(2,3));  
    scoreJoueur = [scoreJoueurDe1, scoreJoueurDe2, scoreJoueurDe3];
    return;
}


// CLASSEMENT
function afficherGagnant() {
    chercherGagnant = classement.sort(function(a,b) {
        return a[1] - b[1];
    });
    labelQuestionRelancerManche = labelVariable.innerHTML = "Le vainqueur de cette manche est " + chercherGagnant[0][0] + "<br> Voulez-vous relancer une manche ?";
}

function chercherIndexGagnantListeJoueurs() {
    let gagnant = chercherGagnant[0][0];
    for (let iGagnant=0; iGagnant<listeJoueurs.length; iGagnant++) {
        if (gagnant == listeJoueurs[iGagnant][0]) {
            // alert("Nom vainqueur trouvé dans la liste des joueurs");
            reindexerGagnantListeJoueurs(iGagnant);
            return;
        }     
    }
    alert("Erreur : le nom du vainqueur est introuvable dans la liste des joueurs");
}

function reindexerGagnantListeJoueurs(iGagnant) {
    for (let i=0; i<iGagnant; i++) {
        reindexer = listeJoueurs[iGagnant - iGagnant + i];
        listeJoueurs.push(reindexer);
    }
    listeJoueurs.splice(0,iGagnant);
    resetResultats();
    // alert("liste Joueurs reindexerGagnantListeJoueurs() : " + listeJoueurs);
}

function verifierNenette() {
    nenette1 = [1,2,2];
    nenette2 = [2,1,2];
    nenette3 = [2,2,1];

    if (JSON.stringify(listeJoueurs[nombreJoueur][1]) === JSON.stringify(nenette1) || JSON.stringify(listeJoueurs[nombreJoueur][1]) === JSON.stringify(nenette2) || JSON.stringify(listeJoueurs[nombreJoueur][1]) === JSON.stringify(nenette3)) {
        // alert("nenette");
        return true;
    } else {
        // alert("pas nenette");
        return false;
    }
}