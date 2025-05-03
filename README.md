# Gestionnaire de Budget Personnel

Une application web complète pour gérer son budget personnel, développée en HTML, CSS et JavaScript.

## Contact

**Développeur :** El Hadji Dieng  
**Email :** elhadji.dieng@gmail.com  
**Téléphone :** +221 77 454 86 61

## Pour les Clients Potentiels

Si vous souhaitez une application similaire ou personnalisée, n'hésitez pas à me contacter. Je peux adapter cette solution selon vos besoins spécifiques :

- Personnalisation des catégories de dépenses
- Ajout de fonctionnalités supplémentaires
- Adaptation à d'autres devises
- Intégration avec d'autres systèmes
- Développement d'une version mobile
- Ajout de fonctionnalités de reporting avancées

## Fonctionnalités

### Gestion des Transactions
- Ajout de transactions (revenus et dépenses)
- Modification des transactions existantes
- Suppression de transactions
- Catégorisation des transactions
- Montants par défaut selon les catégories

### Visualisation des Données
- Affichage du solde total
- Total des revenus et dépenses
- Graphique en camembert des dépenses par catégorie
- Historique des transactions trié par date

### Statistiques Avancées
- Graphiques par période (évolution dans le temps)
- Comparaison mois par mois
- Prévisions budgétaires sur 3 mois
- Analyse des tendances

### Export des Données
- Export en PDF avec mise en page professionnelle
- Export en Excel avec plusieurs feuilles
- Impression des rapports

### Fonctionnalités Supplémentaires
- Sauvegarde automatique des données
- Interface responsive
- Filtrage des transactions par date et catégorie
- Devise en FCFA (adapté pour le Sénégal)

## Utilisation

1. **Ajout d'une Transaction**
   - Sélectionnez le type (revenu ou dépense)
   - Entrez le montant (des valeurs par défaut sont suggérées selon la catégorie)
   - Ajoutez une description
   - Sélectionnez une catégorie
   - Choisissez la date

2. **Visualisation des Statistiques**
   - Consultez le solde total en haut de la page
   - Visualisez la répartition des dépenses dans le graphique
   - Parcourez l'historique des transactions

3. **Export des Données**
   - Cliquez sur "Exporter en PDF" pour générer un rapport
   - Utilisez "Exporter en Excel" pour obtenir les données au format tableur
   - Cliquez sur "Imprimer le rapport" pour une version imprimable

4. **Statistiques Avancées**
   - Naviguez entre les différents onglets de statistiques
   - Consultez les prévisions budgétaires
   - Analysez les tendances mensuelles

## Structure du Projet

```
projet-budget.html
├── Head
│   ├── Métadonnées
│   ├── Styles CSS
│   └── Bibliothèques externes
├── Body
│   ├── Formulaire de transaction
│   ├── Statistiques principales
│   ├── Graphiques
│   └── Historique des transactions
└── Scripts
    ├── Gestion des données
    ├── Calculs statistiques
    ├── Fonctions d'export
    └── Visualisation des données
```

## Technologies Utilisées

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Chart.js pour les graphiques
- jsPDF pour l'export PDF
- SheetJS pour l'export Excel

## Fonctionnalités Techniques

1. **Gestion des Données**
   - Stockage local avec localStorage
   - Structure de données optimisée
   - Calculs statistiques en temps réel

2. **Interface Utilisateur**
   - Design responsive
   - Animations fluides
   - Feedback visuel des actions

3. **Export des Données**
   - Génération de PDF avec mise en page
   - Export Excel avec plusieurs feuilles
   - Impression optimisée

4. **Statistiques**
   - Calculs de moyennes et tendances
   - Prévisions basées sur les données historiques
   - Visualisations interactives

## Personnalisation

Les montants par défaut peuvent être ajustés dans l'objet `montantsParDefaut` :
```javascript
montantsParDefaut: {
    revenus: {
        salaire: 150000,
        autre: 50000
    },
    depenses: {
        loyer: 50000,
        alimentation: 30000,
        transport: 20000,
        loisirs: 15000,
        autre: 10000
    }
}
```

## Compatibilité

- Compatible avec tous les navigateurs modernes
- Optimisé pour les appareils mobiles
- Fonctionne hors ligne (sauf export PDF/Excel)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Services de Développement

Je propose également des services de développement personnalisés :
- Développement d'applications web
- Création de sites web
- Solutions de gestion
- Applications mobiles
- Intégration de systèmes

Contactez-moi pour discuter de vos besoins spécifiques ! 
