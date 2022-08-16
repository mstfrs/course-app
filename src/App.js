import './App.css'
import Courses from './components/Courses'
import Approuter from './router/Approuter'
import Header from './components/Header/Header'

function App() {
  return (
    <div className=" container">
      <Header />
      <Approuter>
        <Courses />
      </Approuter>
    </div>
  )
}

export default App
