import './App.css'

import Approuter from './router/Approuter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Courses from './pages/courses/Courses'

function App() {
  return (
    <div className=" container">
      <Header />
      <Approuter>
        <Courses />
      </Approuter>
      <Footer />
    </div>
  )
}

export default App
