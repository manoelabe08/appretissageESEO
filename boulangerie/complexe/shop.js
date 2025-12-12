
// Récupérer le formulaire
const form = document.getElementById('commandeForm');
const resultatDiv = document.getElementById('resultat');

// Écouter le submit du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement

    // 1. RÉCUPÉRER LES DONNÉES
    const nom = document.getElementById('nom').value.trim();
    const emballage = document.getElementById('emballage').checked;

    // Récupérer les produits cochés
    const produitsCoches = document.querySelectorAll('input[name="produits"]:checked');

    // 2. VALIDER
    let erreur = false;
    let message = '';

    // Vérifier le nom
    if (nom === '') {
        message = '❌ Veuillez entrer votre nom!';
        erreur = true;
    }

    // Vérifier qu'au moins un produit est sélectionné
    if (produitsCoches.length === 0) {
        message = '❌ Veuillez sélectionner au moins un produit!';
        erreur = true;
    }

    // 3. AFFICHER L'ERREUR SI NÉCESSAIRE
    if (erreur) {
        resultatDiv.textContent = message;
        resultatDiv.className = 'resultat error';
        return;
    }

    // 4. CALCULER LE TOTAL
    let total = 0;
    let detailsCommande = `<strong>Commande de ${nom}</strong><br><br>`;

    produitsCoches.forEach(produit => {
        const nom_produit = produit.value;
        const prix = parseFloat(produit.dataset.prix);
        const id_quantite = 'qty-' + nom_produit;
        const quantite = parseInt(document.getElementById(id_quantite).value) || 1;
        const soustotal = prix * quantite;

        total += soustotal;
        detailsCommande += `${nom_produit} × ${quantite} = ${soustotal}€<br>`;
    });

    // Ajouter l'emballage cadeau
    if (emballage) {
        total += 0.50;
        detailsCommande += `<br>Emballage cadeau = +0,50€`;
    }

    // 5. AFFICHER LE RÉSULTAT
    detailsCommande += `<br><br><strong style="font-size: 24px; color: green;">💰 Total : ${total.toFixed(2)}€</strong>`;

    resultatDiv.innerHTML = detailsCommande;
    resultatDiv.className = 'resultat success';

    console.log('Commande:', { nom, total, emballage });
});
