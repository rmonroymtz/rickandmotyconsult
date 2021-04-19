import { createContext, useState } from "react";

export const CharactersContext = createContext();

const CharactersProvider = (props) => {
  const [data, setData] = useState({});
  const [consult, setConsult] = useState(false);
  const [error, setError] = useState(false);
  const [emailData, setEmailData] = useState([]);
  return (
    <CharactersContext.Provider
      value={{ data, setData, consult, setConsult, error, setError, emailData, setEmailData }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
