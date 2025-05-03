// Exercices pratiques sur l'asynchronicité en JavaScript

// Exercice 1: Callback simple
// Créez une fonction qui prend un callback et l'exécute après un délai
function executerAvecDelai(callback, delai) {
    // Votre code ici
}

// Test
executerAvecDelai(() => console.log("Callback exécuté"), 1000);

// Exercice 2: Gestion d'erreurs avec callbacks
// Créez une fonction qui simule une opération risquée avec gestion d'erreurs
function operationRisquee(callback) {
    // Votre code ici
}

// Test
operationRisquee((erreur, resultat) => {
    if (erreur) {
        console.error("Erreur:", erreur);
    } else {
        console.log("Résultat:", resultat);
    }
});

// Exercice 3: Enchaînement de callbacks
// Créez des fonctions qui s'enchaînent avec des callbacks
function etape1(callback) {
    // Votre code ici
}

function etape2(donnees, callback) {
    // Votre code ici
}

function etape3(donnees, callback) {
    // Votre code ici
}

// Test
etape1((resultat1) => {
    etape2(resultat1, (resultat2) => {
        etape3(resultat2, (resultatFinal) => {
            console.log("Résultat final:", resultatFinal);
        });
    });
});

// Exercice 4: Promise simple
// Créez une fonction qui retourne une Promise
function creerPromise() {
    // Votre code ici
}

// Test
creerPromise()
    .then(resultat => console.log("Succès:", resultat))
    .catch(erreur => console.error("Erreur:", erreur));

// Exercice 5: Chaînage de Promises
// Créez des fonctions qui retournent des Promises et les enchaînent
function premiereEtape() {
    // Votre code ici
}

function deuxiemeEtape(donnees) {
    // Votre code ici
}

function troisiemeEtape(donnees) {
    // Votre code ici
}

// Test
premiereEtape()
    .then(deuxiemeEtape)
    .then(troisiemeEtape)
    .then(resultat => console.log("Résultat final:", resultat))
    .catch(erreur => console.error("Erreur:", erreur));

// Exercice 6: Promise.all
// Créez une fonction qui utilise Promise.all pour exécuter plusieurs Promises
function executerEnParallele(promises) {
    // Votre code ici
}

// Test
const promises = [
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1500))
];

// Exercice 7: async/await simple
// Convertissez l'exercice 5 en utilisant async/await
async function executerEtapes() {
    // Votre code ici
}

// Test
executerEtapes()
    .then(resultat => console.log("Résultat:", resultat))
    .catch(erreur => console.error("Erreur:", erreur));

// Exercice 8: Gestion d'erreurs avec async/await
// Créez une fonction async qui gère correctement les erreurs
async function operationAsync() {
    // Votre code ici
}

// Test
operationAsync()
    .then(resultat => console.log("Succès:", resultat))
    .catch(erreur => console.error("Erreur:", erreur));

// Exercice 9: Simulation d'API
// Créez des fonctions qui simulent des appels API avec async/await
async function fetchData(url) {
    // Votre code ici
}

async function traiterDonnees() {
    // Votre code ici
}

// Test
traiterDonnees()
    .then(resultat => console.log("Données traitées:", resultat))
    .catch(erreur => console.error("Erreur:", erreur));

// Exercice 10: Combinaison de techniques
// Créez une fonction qui combine callbacks, Promises et async/await
async function operationComplexe() {
    // Votre code ici
}

// Test
operationComplexe()
    .then(resultat => console.log("Résultat final:", resultat))
    .catch(erreur => console.error("Erreur finale:", erreur)); 