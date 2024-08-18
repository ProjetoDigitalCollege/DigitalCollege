import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import ProductList from "./pages/ProductListingPage/ProductListingPage";
import ProductView from "./pages/ProductViewPage/ProductViewPage";
import Cart from "./pages/CartPage/CartPage";
import ConfirmarCompra from "./pages/ConfirmarCompraPage/ConfirmarCompraPage";
import Sucesso from "./pages/PaginaDeSucessoPage/PaginaDeSucessoPage";
import Login from "./pages/LoginPage/LoginPage";
import Registrar from "./pages/CriarContaPage/CriarContaPage";
import CriarFormulario from "./pages/CriarFormularioPage/CriarFormularioPage";
import Pedidos from "./pages/PedidosPage/PedidosPage";
import Informacoes from "./pages/InformacoesPage/InformacoesPage";
import Error from "./pages/Error404/Error404";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ProductList/" element={<ProductList />} />
          <Route path="ProductView/" element={<ProductView />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="ConfirmarCompra/" element={<ConfirmarCompra />} />
          <Route path="Sucesso/" element={<Sucesso />} />
          <Route path="Login/" element={<Login />} />
          <Route path="Registrar/" element={<Registrar />} />
          <Route path="CriarFormulario/" element={<CriarFormulario />} />
          <Route path="Pedidos/" element={<Pedidos />} />
          <Route path="Informacoes/" element={<Informacoes />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
