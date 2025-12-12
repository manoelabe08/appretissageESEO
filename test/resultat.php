<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Résultat connexion</title>
</head>
<body>
<?php
// Vérifier que le formulaire a bien été soumis en POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Récupération des valeurs envoyées par le formulaire
    $login = $_POST['login'] ?? '';
    $password = $_POST['password'] ?? '';

    // Vérification des identifiants
    if ($login === 'admin' && $password === '123') {
        echo "<h1>Bienvenue, $login !</h1>";
    } else {
        echo "<h1>Erreur : identifiants incorrects.</h1>";
    }

} else {
    // Accès direct à resultat.php sans passer par le formulaire
    echo "<h1>Veuillez passer par le formulaire de connexion.</h1>";
}
?>
</body>
</html>
