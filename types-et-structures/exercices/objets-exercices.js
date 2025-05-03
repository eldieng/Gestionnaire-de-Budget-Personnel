// Exercices pratiques sur les objets en JavaScript

// Exercice 1: Création d'un objet étudiant
// Créez un objet étudiant avec les propriétés suivantes:
// - nom (string)
// - age (number)
// - notes (array de nombres)
// - moyenne (méthode qui calcule la moyenne des notes)

const etudiant = {
    // Votre code ici
};

// Exercice 2: Manipulation d'objets
// Créez une fonction qui prend un objet et retourne un nouvel objet
// avec toutes les valeurs converties en majuscules (si ce sont des strings)
function convertirEnMajuscules(obj) {
    // Votre code ici
}

// Test
const testObj = {
    nom: "jean",
    age: 25,
    ville: "paris"
};

// Exercice 3: Fusion d'objets
// Créez une fonction qui fusionne deux objets
// Si une propriété existe dans les deux objets, utilisez la valeur du second objet
function fusionnerObjets(obj1, obj2) {
    // Votre code ici
}

// Test
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Exercice 4: Vérification de propriétés
// Créez une fonction qui vérifie si un objet contient toutes les propriétés spécifiées
function contientToutesProprietes(obj, proprietes) {
    // Votre code ici
}

// Test
const personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30
};

// Exercice 5: Compteur d'objets
// Créez une fonction qui compte le nombre de propriétés d'un certain type dans un objet
function compterProprietesParType(obj, type) {
    // Votre code ici
}

// Test
const mixte = {
    nom: "Test",
    age: 25,
    actif: true,
    notes: [10, 15, 12]
};

// Exercice 6: Transformation d'objet
// Créez une fonction qui transforme un objet en tableau de paires [clé, valeur]
// triées par ordre alphabétique des clés
function transformerEnTableau(obj) {
    // Votre code ici
}

// Test
const testTransformation = {
    b: 2,
    a: 1,
    c: 3
};

// Exercice 7: Validation d'objet
// Créez une fonction qui valide un objet selon des règles spécifiques
// Les règles sont passées en paramètre sous forme d'objet
function validerObjet(obj, regles) {
    // Votre code ici
}

// Test
const regles = {
    nom: value => typeof value === 'string' && value.length > 0,
    age: value => typeof value === 'number' && value >= 0,
    email: value => typeof value === 'string' && value.includes('@')
};

// Exercice 8: Clonage profond
// Créez une fonction qui effectue un clonage profond d'un objet
// (y compris les objets imbriqués et les tableaux)
function clonerProfondement(obj) {
    // Votre code ici
}

// Test
const objetComplexe = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, { e: 5 }]
    }
};

// Exercice 9: Calcul de statistiques
// Créez une fonction qui calcule des statistiques sur un tableau d'objets
function calculerStatistiques(tableau, propriete) {
    // Votre code ici
}

// Test
const etudiants = [
    { nom: "Jean", note: 15 },
    { nom: "Marie", note: 18 },
    { nom: "Pierre", note: 12 }
];

// Exercice 10: Filtrage d'objets
// Créez une fonction qui filtre un objet en gardant uniquement les propriétés
// qui satisfont une condition donnée
function filtrerObjet(obj, condition) {
    // Votre code ici
}

// Test
const testFiltrage = {
    a: 1,
    b: "test",
    c: true,
    d: 42
}; 