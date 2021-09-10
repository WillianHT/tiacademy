import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const EditarCliente = (props) => {

const [id]=useState(props.match.params.id);

const[nome,setnome]=useState('');
const[endereco,setendereco]=useState('');
const[cidade,setcidade]=useState('');
const[uf,setuf]=useState('');
const[nascimento,setnascimento]=useState('');

const [status,setStatus]= useState({
    formSave:false,
    type:'',
    message:''
});

const edtCliente=async e=>{
    e.preventDefault();
    console.log("Editar")

    setStatus({
        formSave:true
    });

    const headers={
        'Content-Type':'application/json'
    }
   

    await axios.put(api+"/editarcliente",{id,nome,endereco,cidade,uf,nascimento},{headers})
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
    const getCliente=async()=>{
        await axios.get(api+"/cliente/"+id)
        .then((response)=>{
            setnome(response.data.cliente.nome);
            setendereco(response.data.cliente.endereco);
            setcidade(response.data.cliente.cidade);
            setuf(response.data.cliente.uf);
            setnascimento(response.data.cliente.nascimento);
        })
        .catch(()=>{
            console.log("Erro:não foi possivel conetar a api")
        })
    }
    getCliente();
},[id]);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auro p-2">
            <h1>Editar um cliente</h1>
          </div>

            <div>
            <Link
                    to={"/visualizarcliente/"}
                    className="btn btn-outline-warning btn-sm m-1"
                  >
                    Listar
                  </Link>
                  <Link
                    to={"/cliente/"+id}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Voltar
                  </Link>
            </div>
        </div>
        {status.type==='error'?<Alert color="danger">{status.message}</Alert>:""}
        {status.type==='success'?<Alert color="success">{status.message}</Alert>:""}
        <Form className="p-2" onSubmit={edtCliente}>
            <FormGroup className="p-2">
                <Label>Nome do Cliente</Label>
                <Input type="text" name="nome" placeholder="" value={nome} onChange={e=>setnome(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Endereço</Label>
                <Input type="text" name="endereco" placeholder="" value={endereco} onChange={e=>setendereco(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Cidade</Label>
                <Input type="text" name="cidade" placeholder="" value={cidade} onChange={e=>setcidade(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>UF</Label>
                <Input type="text" name="uf" placeholder="" value={uf} onChange={e=>setuf(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Nascimento</Label>
                <Input type="text" name="nascimento" placeholder="" value={nascimento} onChange={e=>setnascimento(e.target.value)}/>
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
