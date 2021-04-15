function afficherEvenement(evenement) {
    document.getElementById("listeEvenements").innerHTML += `
    <div class="event">
        <h2>Titre : ${evenement.titre}</h2>
        <p>${evenement.description}</p>
    </div>`;
}

function creerEvenement(titre, debut, fin, desc, image) {
    return {
        titre: titre,
        dateHeureDebut:  debut,
        dateHeureFin: fin,
        description : desc,
        urlImage : image
    }
}

let listeEvenements = [];

listeEvenements.push(creerEvenement("Ev. 1", new Date(), new Date(), "Super événement 1", ""));
listeEvenements.push(creerEvenement("Ev. 2", new Date(), new Date(), "Super événement 2", ""));


for (let evenement of listeEvenements) {
    afficherEvenement(evenement);
}

console.log(listeEvenements);
