import './App.css';
import GlobalStyle from './theme/globalStyles';
import { AuthContextProvider } from './context/authcontext';
import Rotas from './Routes';


function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle/>
      <Rotas/>
    </AuthContextProvider>
  );
}

export default App;
