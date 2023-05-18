import './App.css';
import GlobalStyle from './theme/globalStyles';
import { Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Main from './pages/main';
import Register from './pages/register';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/index" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
