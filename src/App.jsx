import FavoriteSites from "./components/FavoriteSites"
import Profile from "./components/Profile"
import Gallery from "./components/Gallery"
import "./styles/App.css"
import StateAssignementOne from "./components/StateAssignementOne"
import StateAssignementTwo from "./components/StateAssignementTwo"

function App() {

  return (
    <div className="App" id="contents">
      <FavoriteSites />
      <Profile />
      <Gallery />
      <StateAssignementOne />
      <StateAssignementTwo />
    </div>
  )
}

export default App
