const express=require('express');
const cors=require('cors');
const {op}=require('sequelize');

const models=require('./models');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá mundo!');
});

app.post('/clientes', async(req,res)=>{
    await cliente.create(req.body )
    .then(() => {
        return res.json({
            type: "success",
            message: "Cliente adicionado com sucesso!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro."
        });
    });

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});

app.post('/servicos',async(req, res)=>{
    await servico.create(req.body )
    .then(() => {
        return res.json({
            type: "success",
            message: "Serviço foi inserido!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro."
        });
    });

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});

app.post('/pedidos', async(req,res)=>{
    await pedido.create(req.body )
    .then(() => {
        return res.json({
            type: "success",
            message: "Pedido aceito!"
        });
    }).catch((erro) => {
        return res.status(400).json({
            type: "error",
            message: "Erro."
        });
    });

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };
});

app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
        idCliente:"1",
        idServico:"1",
        valor:"250.00",
    });
    res.send('Pedido aceito!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/quantidadedeservicos', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id',async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error:false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Código não está cadastrado!"
        });
    });
});

app.get('/pedido/:id',async(req,res)=>{
    pedido.findByPk(req.params.id)
    .then(pedido=>{
        return res.json({
            error:false,
            pedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Código não está cadastrado!"
        });
    });
});

app.get('/cliente/:id',async(req,res)=>{
    cliente.findByPk(req.params.id)
    .then(cliente=>{
        return res.json({
            error:false,
            cliente
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Código não está cadastrado!"
        });
    });
});

//Todos os clientes
app.get('/listaclientes',async(req, res)=>{
    await cliente.findAll({
        raw: true
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Todos os clientes em ordem de antiguidade
app.get('/listaclientesantigo',async(req, res)=>{
    await cliente.findAll({
        order:[['createdAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Todos os pedidos
app.get('/listapedidos',async(req, res)=>{
    await pedido.findAll({
        raw: true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//Todos os pedidos em ordem de valor
app.get('/listapedidosvalor',async(req, res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//Numero de clientes
app.get('/numclientes',async(req, res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json({clientes})
    });
});

//Numero de pedidos
app.get('/numpedidos',async(req, res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json({pedidos})
    });
});

//Soma dos gastos de um cliente
app.get('/totalgasto/:id',async(req,res)=>{
    await pedido.sum('valor',{
        where:{
            ClienteId:(req.params.id)
        }
    }).then((pedido)=>{
        return res.json({pedido})
    });
});

//alterações
app.get('/atualizaservico',async(req,res)=>{
    await servico.findByPk(1)
    .then(servico=>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso!"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do cliente"
        })
    })
});


app.put('/editarservico',(req,res)=>{
    servico.update(req.body,{
    where:{id:req.body.id}
    }).then(function(){
        return res.json({
            error:false,
            message:"Serviço foi alterado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Erro na alteração do serviço."
        });
    });
});

app.put('/editarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido editado com sucesso!"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao editar o pedido."
        })
    })
});


app.get('/servicospedidos',async(req,res)=>{
    await servico.findByPk(1,{
        include:[{all:true}]
    }).then(servico=>{
        return res.json({servico})
    });
});

app.put('/editarpedidos',(req,res)=>{
    pedido.update(req.body,{
        where:{ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error:false,
            message:"Pedido modificado com sucesso."
        });
    }).catch(function(error){
        return res.status(400).json({
            error:true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

app.get('/totalgastoporid/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: { ClienteId: req.params.id }
    }).then((pedido) => {
        return res.json({ pedido })
        })
    });

app.get('/pedidosporcliente/:id', async(req,res)=>{
    await pedido.findAll({where: {ClienteId: [req.params.id]}})
    .then(function(pedidos){
        return res.json({pedidos})
    });

});

app.get('/excluircliente',async(req,res)=>{
    cliente.destroy({
        where:{id:2}
    });
});

app.delete('/apagarservico/:id', (req,res)=>{
    servico.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: "Serviço foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o serviço."
        });
    });
});

app.delete('/apagarcliente/:id', (req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});

app.delete('/apagarpedido/:id', (req,res)=>{
    pedido.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message: "O pedido foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o pedido."
        });
    });
});



//INDICADOR DE SERVIDOR ATIVO
let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});