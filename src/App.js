import './App.css';
import GlobalStyle from './theme/globalStyles';
import { AuthContextProvider } from './context/authcontext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import Rotas from './Routes';
import 'dayjs/locale/pt-br';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </LocalizationProvider>
    </AuthContextProvider>
  );
}

export default App;
