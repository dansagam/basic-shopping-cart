import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemForm from './components/ItemForm';

function App() {
   return (
      <div className="App">
         <AppNavbar />
         <Container>
            <ItemForm />
            <ShoppingList />
         </Container>
      </div>
   );
}

export default App;
