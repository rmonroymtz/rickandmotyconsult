import React, { Fragment, useContext, useEffect } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Pagination from "./Pagination";
function TableResults() {
  const { data, setEmailData, emailData } = useContext(CharactersContext);

  useEffect(() => {
    console.log(emailData);
  }, [emailData]);

  const handleAddData = (character) => {
    const tempData = emailData;
    tempData.push(character);
    setEmailData(tempData);
  };

  const handleSend = () => {
    alert(JSON.stringify(emailData));
  };

  const { results } = data;
  const consults =
    results &&
    results.map((data) => (
      <tr key={data.id}>
        <td>
          <img src={data.image} alt="" width="40" />
        </td>
        <td>{data.name}</td>
        <td>{data.status}</td>
        <td>{data.species}</td>
        <td>{data.type}</td>
        <td>{data.gender}</td>
        <td>
          <button className="btn">
            <i
              className="material-icons"
              onClick={() => {
                handleAddData(data);
              }}
            >
              add
            </i>
          </button>
        </td>
      </tr>
    ));

  return (
    <Fragment>
      <Pagination />
      <div className="col m4 right">
        <button className="green btn right" onClick={handleSend}>
          Send Email
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>SPECIES</th>
            <th>TYPE</th>
            <th>GENDER</th>
            <th>ADD to email</th>
          </tr>
        </thead>
        <tbody>{consults}</tbody>
      </table>
    </Fragment>
  );
}

export default TableResults;
