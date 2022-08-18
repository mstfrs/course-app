import './App.css'

import Approuter from './router/Approuter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Courses from './pages/courses/Courses'
import { ModalProvider } from './context/ModalContext'

function App() {
  return (
    <div className=" container">
      <Header />
      <ModalProvider>
        <Approuter>
          <Courses />
        </Approuter>
      </ModalProvider>
      <Footer />
    </div>
  )
}

export default App
