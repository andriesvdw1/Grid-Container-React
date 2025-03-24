import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import SideBar from './SideBar'
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
