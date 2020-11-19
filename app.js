import express from 'express';
import mongoose from 'mongoose';
import linkRoute from './routes/linkRoute.js';
import path from 'path'

const app = express();
const port = 3334;

mongoose.connect('mongodb://localhost:27017/newlinks', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro")})
db.once("open", () => { console.log("Banco carregado")})

app.set('view engine', 'ejs');
app.set('views', path.join('templates'))

app.use('/', linkRoute)

app.listen(port, () => console.log("Server running on port " + port)) 