import './App.css';
import GlobalStyle from './theme/globalStyles';
import { AuthContextProvider } from './context/authcontext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import Rotas from './Routes';
import { UserAuth } from './context/authcontext';
import 'dayjs/locale/pt-br';



function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle/>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
       <Rotas/>
      </LocalizationProvider>
    </AuthContextProvider>
  );
}

export default App;
