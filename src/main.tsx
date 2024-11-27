import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListEmployees from './pages/ListEmployees'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/layout/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <Header/>
    <ListEmployees/>
  </StrictMode>
)
