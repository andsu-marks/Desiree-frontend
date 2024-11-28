import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import NewEmployeePage from './pages/NewEmployee';

createRoot(document.getElementById('root')!).render(
  <Router>
    <GlobalStyles/>
    <Header/>
    <Routes>
      <Route path='/' element={<ListEmployees/>} />
      <Route path='/newemployee' element={<NewEmployeePage/>} />
    </Routes>
  </Router>
)
