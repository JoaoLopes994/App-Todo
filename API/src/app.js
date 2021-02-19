const express = require('express')
const bodyParser = require('body-parser')


const indexController = require('./controllers/index-controller');
const usuariosController = require('./controllers/usuario-controller');
const tarefasController = require('./controllers/tarefas-controller')
const bd = require('./infra/sqlite-db');

const port = 8080;
const app = express();


app.use(bodyParser.json())


indexController(app);
usuariosController(app,bd);
tarefasController(app,bd)

app.listen(port, ()=> {
    console.log(`[INFO]Rota ativada em execução http://localhost:${port}`)
})