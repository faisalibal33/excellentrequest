import "./listPersonil.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Personil from "../../components/personil/Personil"

const ListPersonil = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Personil/>
      </div>
    </div>
  )
}

export default ListPersonil