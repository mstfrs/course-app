import './App.css'
import Courses from './components/Courses'
import Approuter from './router/Approuter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className=" container">
      <Header />
      <Approuter>
        <Courses />
      </Approuter>
      <Footer/>
    </div>
  )
}

export default App
