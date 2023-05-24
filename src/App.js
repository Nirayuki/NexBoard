import './App.css';
import GlobalStyle from './theme/globalStyles';
import { AuthContextProvider } from './context/authcontext';
import Rotas from './Routes';
import { UserAuth } from './context/authcontext';
import 'dayjs/locale/pt-br';



function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle/>
      <Rotas/>
    </AuthContextProvider>
  );
}

export default App;
