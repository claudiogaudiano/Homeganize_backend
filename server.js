const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

// Permette di gestire richieste da domini diversi 
// (necessario per la comunicazione con il frontend)
app.use(cors()); 
app.use(express.json());

const dbRouter = require('./routes/databaseRouters')
app.use('/', dbRouter)

//Connessione al database di MongoDB
mongoose.connect('mongodb+srv://newUser1:-RN5r_v_LZt!pJ7@cluster0.5l8ao.mongodb.net/homeganize?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Connesso al DB");
    app.listen(5000, () => {
        console.log('App in ascolto')
    }); 
})
.catch((error)=> {
    console.log("Errore di connessione al DB", error);
})