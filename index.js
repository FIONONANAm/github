// console.log("Bonjour tous le monde !
import  express  from "express";

const app = express();
const port = 8000;

app.get('/', (req, res)=>{
  res.send('Bienvenue')
})


app.listen(port,()=>console.log(`le serveur a démarrer sur: http://localhost:${port}`));
