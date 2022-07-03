import "./worktodo.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import SearchItem from "../searchItem/SearchItem";

const Worktodo = () => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>Work to Do</h1>
        <Link to={`/user/new`} className="link">
          Add New
        </Link>
      </div>
      {loading ? ( "loading" ) : (
        <div className="worktodolist">
          {data.sort((a, b) => b.createdAt > a.createdAt? 1 : -1)
            .filter(item=>item.progress.toLowerCase().includes("open") || item.progress.toLowerCase().includes("progress") )
            .map((item) => (                  
              <SearchItem item={item} key={item._id} /*handleClick={() => {handleClick(); setIdfetch(item)}}8*//>
          ))}
        </div>
      )}     
    </div>
  );
};

export default Worktodo;
