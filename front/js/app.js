
function deleteEvent(id) {
  fetch(`http://localhost:3000/event/${id}`, {
    method: "DELETE",
  }).then((res) => res.json().then(successFetchDelete, traiterErreurFetch));
}

function successFetchDelete(response) {
  let indexEvenement = listeEvenements.findIndex((i) => i.id === response);
  if (indexEvenement != -1) {
    listeEvenements.splice(response, 1);
    document.getElementById(`event${response}`).remove();
  }
}

function traiterSuccesFetch(reponse){
  console.log(reponse);
  for (var i = 0; i < reponse.length; i++) {
    document.getElementById("listeEvenements").innerHTML += `
       <div class="event">
            <img src="${reponse[i].urlImage}">
            <h2>Titre : ${reponse[i].titre}</h2>
            <p>${reponse[i].description}</p>
            <br>
            <p>${reponse[i].dateHeureDebut}</p>
            <p>${reponse[i].dateHeureFin}</p>
            <button type="button" onclick="window.location.href = '../event.html'">detail</button>
            <button type="button" onclick="deleteEvent('${reponse[i].id}')">delete</button>
       </div>`;}
}

function traiterErreurFetch(erreur){
  console.log("erreur");
}

function appInit() {
  fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then(traiterSuccesFetch, traiterErreurFetch);
};

appInit()
