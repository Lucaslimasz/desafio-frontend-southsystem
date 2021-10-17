import GlobalStyle from './styles/global';
import Router from "./routes";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
