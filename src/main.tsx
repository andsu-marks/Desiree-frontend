import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import NewEmployeePage from './pages/NewEmployee';
import EditEmployeePage from './pages/EditEmployee';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <Router>
    <GlobalStyles/>
    <Header/>
    <Toaster/>
    <Routes>
      <Route path='/' element={<ListEmployees/>} />
      <Route path='/newemployee' element={<NewEmployeePage/>} />
      <Route path='/editemployee/{:id}' element={<EditEmployeePage/>} />
    </Routes>
  </Router>
)
