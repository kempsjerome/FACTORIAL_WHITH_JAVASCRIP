
/*n factorial (n) must return the factorial of n
 knowing that since n is a natural number,its factorial is represented as n!
is in the product of n and all natural mumber less than
it and grater than 0 */

function nfactoriel(n) {
    // Cas de base : 0! = 1
    debugger;
    if (n === 1 || n === 0) {
        return 1;
    }
    if (n < 0) {
        return "error";
    }
    // Appel récursif : n! = n * (n-1)!
    return n * nfactoriel(n - 1);
}

// Exemple d'utilisation
let resultat = nfactoriel(7);
console.log(resultat);  // Output: 5040






//FACTORIAL AVEC LA BOUCLE FOR

function factorialLoop(n) {
    // Vérifie si n est négatif
    if (n < 0) {
        return "error";
    }

    // Initialise le résultat à 1
    let result = 1;

    // Utilise une boucle for pour multiplier les nombres de 2 à n
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    // Retourne le résultat final
    return result;
}

// Exemple d'utilisation
let resultLoop = factorialLoop(7);
console.log(resultLoop);  // Output: 5040







//2. AVEC LA Fonction Reduce :


function factorialReduce(n) {
    // Vérifie si n est négatif
    if (n < 0) {
        return "error";
    }

    // Utilise Array.from pour créer un tableau de 1 à n
    // Ensuite, utilise reduce pour multiplier tous les éléments du tableau
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, num) => acc * num, 1);
}

// Exemple d'utilisation
let resultReduce = factorialReduce(7);
console.log(resultReduce);  // Output: 5040




function factorialIterative(n) {
    // Vérifie si n est négatif
    if (n < 0) {
        return "error";
    }

    // Utilise l'opérateur ternaire pour gérer le cas particulier de 0! = 1
    return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, num) => acc * num, 1);//L'opérateur ternaire est une manière concise d'écrire une instruction conditionnelle en JavaScript. Il s'agit d'une expression qui prend trois opérandes : une condition, une valeur à renvoyer si la condition est vraie, et une valeur à renvoyer si la condition est fausse.

    //Dans le contexte de la fonction factorialIterative, la ligne suivante utilise l'opérateur ternaire :
}

// Exemple d'utilisation
let resultIterative = factorialIterative(7);
console.log(resultIterative);  // Output: 5040



/*
Ces approches ont chacune leurs avantages et inconvénients 
en termes de performance et de lisibilité du code. 
La méthode récursive que vous avez utilisée est élégante, 
mais elle peut entraîner un débordement de pile (stack overflow) 
pour des valeurs très grandes de n. 
Les autres méthodes sont moins susceptibles de causer ce problème.

*/