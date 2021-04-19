import axios from "axios";
import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

function Pagination() {
  const { data, setData } = useContext(CharactersContext);
  const { info } = data;
  const update = async (key) => {
      const result = await axios({
          url:info[key],
          method:'get'
      })

      setData(result.data)
  }

  const preview = info.prev ? (
    <li onClick={()=>update('prev')}>
      <a href="#!">
        <i className="material-icons">chevron_left</i>
      </a>
    </li>
  ) : (
    <li className="disabled">
      <a href="#!">
        <i className="material-icons">chevron_left</i>
      </a>
    </li>
  );

  const next = info.next ? (
    <li onClick={()=>update('next')}>
      <a href="#!">
        <i className="material-icons">chevron_right</i>
      </a>
    </li>
  ) : (
    <li className="disabled">
      <a href="#!">
        <i className="material-icons">chevron_right</i>
      </a>
    </li>
  );
  return (
    <div className="col s12 center">
      <ul className="pagination">
        {preview}

        {next}
      </ul>
    </div>
  );
}

export default Pagination;
