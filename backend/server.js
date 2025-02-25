require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//aqui eu conecto ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado."))
.catch(err => console.log(err));

//rota de teste
app.get("/", (req, res) => {
    res.send("API está funcionando.");
});

app.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}'));