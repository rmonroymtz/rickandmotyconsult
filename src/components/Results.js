import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import TableResults from "./TableResults";
const Results = () => {
  const { consult, data, error } = useContext(CharactersContext);
  const failure = error ? (
    <h3 className="red-text center">Hubo un error en la consulta</h3>
  ) : (
    <h3 className="center">No se ha realizado ninguna consulta</h3>
  );
  const loading = consult ? (
    <h4 className='center'>Se esta realizando una consulta...</h4>
  ) : (
    <TableResults />
  );
  const status = Object.keys(data).length === 0 ? failure : loading;
  return (
    <div className="row">
      <div className="col s12">{status}</div>
    </div>
  );
};

export default Results;
