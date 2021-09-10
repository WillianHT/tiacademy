import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const[pedido, setPedido] = useState({
        ClienteId:'',
        ServicoId:'',
        valor:'',
        data:''

    });

    const[status, setStatus]=useState({
        formSave:false,
        type:'',
        message:''
    })

    const valorInput= e => setPedido({
        ...pedido,[e.target.name]:e.target.value
    });

    const cadPedido=async e=>{
      e.preventDefault();

      setStatus({
          formSave:true
      });

      const headers={
          'Content-Type':'application/json'
      };

      await axios.post(api + "/pedidos",pedido,{headers})
      .then((response) => {
          if(response.data.error){
              setStatus({
                  formSave:false,
                  type:'error',
                  message:response.data.message
              });
          }else{
            setStatus({
                type:'success',
                message:response.data.message
            });
          }
      })
      .catch(() => {
        setStatus({
            type:'error',
            message: "Erro:Não foi possível se conectar a API"
        });
      })
  }
  
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auro p-2">
            <h1>Novo pedido</h1>
          </div>
          <div className="p-2">
            <Link
              to="/visualizarpedido"
              className="btn btn-outline-primary btn-sm"
            >
              Voltar
            </Link>
          </div>
        </div>
        <hr className="m-1"/>

        {status.type==='error'?<Alert color="danger">{status.message}</Alert>:""}
        {status.type==='success'?<Alert color="success">{status.message}</Alert>:""}
        <Form className="p-2" onSubmit={cadPedido}>
            <FormGroup className="p-2">
                <Label>ID do cliente</Label>
                <Input type="text" name="ClienteId" placeholder="ID DO CLIENTE" onChange={valorInput} />
            </FormGroup>

            <FormGroup className="p-2">
                <Label>ID do serviço</Label>
                <Input type="text" name="ServicoId" placeholder="ID DO SERVIÇO" onChange={valorInput}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Valor</Label>
                <Input type="text" name="valor" placeholder="VALOR" onChange={valorInput}/>
            </FormGroup>

            <FormGroup className="p-2">
                <Label>Data</Label>
                <Input type="text" name="data" placeholder="DATA" onChange={valorInput}/>
            </FormGroup>

            {status.formSave?
            <Button type="submit" outline color="info" disabled>Salvando...
                <Spinner size="sm" color="primary"/></Button>:
            <Button type="submit" outline color="info">Cadastrar</Button>}
        </Form>

            
      </Container>
    </div>
  );
}
