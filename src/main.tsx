import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import EmployeesPage from './pages/ListEmployees';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import NewEmployeePage from './pages/NewEmployee';
import EditEmployeePage from './pages/EditEmployee';
import LoginPage from './pages/Login';

createRoot(document.getElementById('root')!).render(
  <Router>
    <GlobalStyles/>
    <Header/>
    <Toaster/>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/employees' element={<EmployeesPage/>} />
      <Route path='/newemployee' element={<NewEmployeePage/>} />
      <Route path='/editemployee/:id' element={<EditEmployeePage/>} />
    </Routes>
  </Router>
)
