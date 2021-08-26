import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemForm from './components/ItemForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './reducers/authReducers';

function App() {
   const dispatch = useDispatch()
   useEffect(() =>{
      dispatch(loadUser())
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch])
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
