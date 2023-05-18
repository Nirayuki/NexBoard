import './App.css';
import GlobalStyle from './theme/globalStyles';
import { Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Main from './pages/main';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/index" element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
