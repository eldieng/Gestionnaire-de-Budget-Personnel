// Exercices pratiques sur les fonctions en JavaScript

// Exercice 1: Fonction avec paramètres par défaut
// Créez une fonction qui calcule le prix TTC d'un produit
// avec un taux de TVA par défaut de 20%
function calculerPrixTTC(prixHT, tauxTVA = 20) {
    // Votre code ici
}

// Test
const prixHT = 100;

// Exercice 2: Fonction avec nombre variable d'arguments
// Créez une fonction qui calcule la moyenne d'un nombre variable de notes
function calculerMoyenne(...notes) {
    // Votre code ici
}

// Test
const notes = [10, 15, 12, 18];

// Exercice 3: Fonction fléchée
// Convertissez la fonction suivante en fonction fléchée
function multiplier(a, b) {
    return a * b;
}

// Votre code ici

// Exercice 4: Fonction comme valeur de retour
// Créez une fonction qui retourne une fonction
// La fonction retournée doit ajouter un nombre fixe à son argument
function createAdder(nombre) {
    // Votre code ici
}

// Test
const ajouter5 = createAdder(5);

// Exercice 5: Fonction avec callback
// Créez une fonction qui applique une transformation à chaque élément d'un tableau
// en utilisant un callback
function transformerTableau(tableau, transformation) {
    // Votre code ici
}

// Test
const nombres = [1, 2, 3, 4, 5];

// Exercice 6: Fonction récursive
// Créez une fonction récursive qui calcule la factorielle d'un nombre
function factorielle(n) {
    // Votre code ici
}

// Test
const nombre = 5;

// Exercice 7: Fonction avec closure
// Créez une fonction qui maintient un compteur privé
function createCounter() {
    // Votre code ici
}

// Test
const compteur = createCounter();

// Exercice 8: Fonction avec this
// Créez un objet avec des méthodes qui utilisent this
const calculatrice = {
    // Votre code ici
};

// Test
calculatrice.valeur = 0;

// Exercice 9: Fonction génératrice
// Créez une fonction génératrice qui produit une séquence de nombres
function* generateurNombres() {
    // Votre code ici
}

// Test
const generateur = generateurNombres();

// Exercice 10: Fonction avec gestion d'erreurs
// Créez une fonction qui gère les erreurs de manière appropriée
function operationRisquee(parametre) {
    // Votre code ici
}

// Test
const parametre = "test"; 