const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa,
    removerTarefa,
    concluirTarefa } =require('./Controllers/gerenciador-tarefas');

const {
    finalizarCompra,
    obterCidadesPorEstado} =require('./Controllers/mini-ecommerce');

const upload = require('./Controllers/upload')


const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({ createParentPath: true }));

function naoImplementado (req, res) {
    res.status(501).json({erro:'Não implementado'})
};

app.get('/gerenciador-tarefas', listarTarefas);
app.get('/gerenciador-tarefas/:id', listarTarefaId);
app.post('/gerenciador-tarefas', cadastrarTarefa);
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
app.delete('/gerenciador-tarefas/:id', removerTarefa);
app.put('/gerenciador-tarefas/:id/concluir', obterCidadesPorEstado);


app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstado);

app.post('/uploads', upload);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`))
