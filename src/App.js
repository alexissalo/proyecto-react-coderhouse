import{BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import FavoritesContextProvider from "./context/FavoritesContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext>
        <CartContextProvider>
        <FavoritesContextProvider>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/account" element={<Account/>}/>
              <Route exact path="/favorites" element={<Favorites/>}/>
            </Routes>
        </FavoritesContextProvider>
        </CartContextProvider>
        </AuthContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
