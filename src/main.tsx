import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListEmployees from './pages/ListEmployees'
import GlobalStyles from './styles/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <ListEmployees/>
  </StrictMode>,
)
