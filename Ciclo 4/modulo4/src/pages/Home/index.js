import { Container } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auro p-2">
            <h1>Home</h1>
          </div>
          <div className="p-2">
            <a href="/visualizarcliente" className="btn btn-outline-success btn-sm">
              Clientes
            </a>
          </div>
          <div className="p-2">
            <a href="/visualizarservico" className="btn btn-outline-success btn-sm">
             Serviços
            </a>
          </div>
          <div className="p-2">
            <a href="/visualizarpedido" className="btn btn-outline-success btn-sm">
             Pedidos
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
