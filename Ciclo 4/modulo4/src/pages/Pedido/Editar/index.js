import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const EditarPedido = (props) => {

const [id]=useState(props.match.params.id);

const[ClienteId,setClienteId]=useState('');
const[ServicoId,setServicoId]=useState('');
const[valor,setvalor]=useState('');
const[data,setdata]=useState('');

const [status,setStatus]= useState({
    formSave:false,
    type:'',
    message:''
});

const edtPedido=async e=>{
    e.preventDefault();
    console.log("Editar")

    setStatus({
        formSave:true
    });

    const headers={
        'Content-Type':'application/json'
    }
   

    await axios.put(api+"/editarpedido",{id,ClienteId,ServicoId,valor,data},{headers})
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
    const getPedido=async()=>{
        await axios.get(api+"/pedido/"+id)
        .then((response)=>{
            setClienteId(response.data.pedido.ClienteId);
            setServicoId(response.data.pedido.ServicoId);
            setvalor(response.data.pedido.valor);
            setdata(response.data.pedido.data);
        })
        .catch(()=>{
            console.log("Erro:não foi possivel conetar a api")
        })
    }
    getPedido();
},[id]);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auro p-2">
            <h1>Editar um pedido</h1>
          </div>

            <div>
            <Link
                    to={"/visualizarpedido/"}
                    className="btn btn-outline-warning btn-sm m-1"
                  >
                    Listar
                  </Link>
                  <Link
                    to={"/pedido/"+id}
                    className="btn btn-outline-warning btn-sm"
                  >
                    Voltar
                  </Link>
            </div>
        </div>
        {status.type==='error'?<Alert color="danger">{status.message}</Alert>:""}
        {status.type==='success'?<Alert color="success">{status.message}</Alert>:""}
        <Form className="p-2" onSubmit={edtPedido}>
            <FormGroup className="p-2">
                <Label>ID do cliente</Label>
                <Input type="text" name="ClienteId" placeholder="" value={ClienteId} onChange={e=>setClienteId(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>ID do serviço</Label>
                <Input type="text" name="ServicoId" placeholder="" value={ServicoId} onChange={e=>setServicoId(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Valor</Label>
                <Input type="text" name="valor" placeholder="" value={valor} onChange={e=>setvalor(e.target.value)}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Data</Label>
                <Input type="text" name="data" placeholder="" value={data} onChange={e=>setdata(e.target.value)}/>
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
