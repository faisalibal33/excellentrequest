import "./listworktodo.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Worktodo from "../../components/worktodo/Worktodo"

const Listworktodo = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Worktodo/>
      </div>
    </div>
  )
}

export default Listworktodo;