const express = require('express')
const app = express()
var cors = require('cors')

const port = 3000
app.use(cors())


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function creerEvenement(id, titre, debut, fin, desc, image) {
    return {
        id: id,
        titre: titre,
        dateHeureDebut:  debut,
        dateHeureFin: fin,
        description : desc,
        urlImage : image
    }
}

let listeEvenements = [];

listeEvenements.push(creerEvenement("zer","Ev. 1", new Date(), new Date(), "Super événement 1", "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"));
listeEvenements.push(creerEvenement("aze","Ev. 2", new Date(), new Date(), "Super événement 2", "https://www.presse-citron.net/app/uploads/2019/04/trou-noir-espace-1000x600.jpg"));



app.get('/events', (req, res) => {
  res.json(listeEvenements);
})

app.get('/event', (req, res) => {
  res.json(listeEvenements);
})

app.delete('/event/:id', (req, res) => {
  let id = req.params.id;
  let indexEvent = listeEvenements.findIndex(ev => ev.id === req.params.id)
  if (indexEvent != -1) {
    listeEvenements.splice(indexEvent, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})
















//
