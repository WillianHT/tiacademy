import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const EditarServico = (props) => {

const [id]=useState(props.match.params.id);

const[nome,setNome]=useState('');
const[descricao,setDescricao]=useState('');

const [status,setStatus]= useState({
    formSave:false,
    type:'',
    message:''
});

const edtServico=async e=>{
    e.preventDefault();
    console.log("Editar")

    setStatus({
        formSave:true
    });

    const headers={
        'Content-Type':'application/json'
    }
   

    await axios.put(api+"/editarservico",{id,nome,descricao},{headers})
    .then((response)=>{
        console.log(response.data.error);
        console.log(response.data.message);
        setStatus({
            formSave:false
        });
    })
    .catch(()=>{
        setStatus({
            type: 'error',
            message: 'Erro:Não foi possível acessar a api'
        })
    })
};

useEffect(()=>{
    const getServico=async()=>{
        await axios.get(api+"/servico/"+id)
        .then((response)=>{
            setNome(response.data.servico.nome);
            setDescricao(response.data.servico.descricao);
        })
        .catch(()=>{
            console.log("Erro:não foi possivel conetar a api")
        })
    }
    getServico();
},[id]);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auro p-2">
            <h1>Editar um serviço</h1>
          </div>

            <div>
            <Link
                    to={"/visualizarservico/"}
                    className="btn btn-outline-warning btn-sm m-1"
                  >
                    Listar
                  </Link>
                  <Link
                    to={"/servico/"+id}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Voltar
                  </Link>
            </div>
        </div>
        {status.type==='error'?<Alert color="danger">{status.message}</Alert>:""}
        {status.type==='success'?<Alert color="success">{status.message}</Alert>:""}
        <Form className="p-2" onSubmit={edtServico}>
            <FormGroup className="p-2">
                <Label>Nome</Label>
                <Input type="text" name="nome" placeholder="Nome do serviço" value={nome} onChange={e=>setNome(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Descrição</Label>
                <Input type="text" name="descricao" placeholder="Descrição do serviço" value={descricao} onChange={e=>setDescricao(e.target.value)}/>
            </FormGroup>

            {status.formSave?
            <Button type="submit" outline color="info" disabled>Salvando...
                <Spinner size="sm" color="primary" children=""/></Button>:
            <Button type="submit" outline color="info m-1" >Salvar</Button>}
        </Form>
      </Container>
    </div>
  );
};
