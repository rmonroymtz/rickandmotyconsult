import React, { useContext } from "react";
import { useFormik } from "formik";
import { Input, Select } from "./UI";
import { object, string } from "yup";
import axios from "axios";
import {CharactersContext} from '../context/CharactersContext';

const SearchForm =() => {

    const { setData, setConsult, setError } = useContext(CharactersContext)

  const validationSchema = object().shape({
    name: string(),
    status: string(),
    species: string(),
    gender: string(),
    type: string(),
  });

  const initialValues = {
    name: "",
    status: "",
    species: "",
    gender: "",
    type: "",
  };

  const onSubmit = (values) => {
    const { name, status, species, gender, type } = values;
    if (
      name === "" &&
      status === "" &&
      species === "" &&
      gender === "" &&
      type === ""
    ) {
      formik.setSubmitting(false);
      alert("Alguno de los campos tiene que tener informacion");
      return;
    }
    setConsult(true)
    setTimeout(() => {
      const params = {page:1};

      if (name !== "") params.name = name;
      if (status !== "") params.status = status;
      if (species !== "") params.species = species;
      if (gender !== "") params.gender = gender;
      if (type !== "") params.gender = gender;

      axios({
        method: "get",
        url: "https://rickandmortyapi.com/api/character/",
        params,
      }).then(response => {
          setData(response.data);
          setConsult(false)
      }).catch(e => console.log(e))
      formik.setSubmitting(false);
      setError(true)
      setConsult(false)
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { handleChange, handleSubmit, values } = formik;
  return (
    <form className="row" onSubmit={handleSubmit}>
      <Input
        name="name"
        id="name"
        onChange={handleChange}
        value={values.name}
      />
      <Select
        name="status"
        id="status"
        onChange={handleChange}
        value={values.status}
      >
        <option value="" disabled>
          Select one status
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknow">Unknow</option>
      </Select>
      <Input
        name="species"
        id="species"
        onChange={handleChange}
        value={values.species}
      />
      <Input
        id="type"
        name="type"
        onChange={handleChange}
        value={values.type}
      />

      <Select
        name="gender"
        id="gender"
        onChange={handleChange}
        value={values.gender}
      >
        <option value="">Select one gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknow">Inknow</option>
      </Select>
      <div className="input-field col s12">
        <button
          className="btn right"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Consult
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
