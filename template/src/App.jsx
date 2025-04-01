import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar/SideBar'
function App() {
 
  return (
    <>
      <div className='app-container'>
        <SideBar/>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </>
  )
}

export default App
