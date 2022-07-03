import "./listAllrequest.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AllRequest from "../../components/allRequest/AllRequest"

const ListAllRequest = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AllRequest/>
      </div>
    </div>
  )
}

export default ListAllRequest;