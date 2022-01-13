import { useState } from "react";

const useForm = (initialState = {}, func) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    func();
  };

  return [values, handleInputChange, handleOnSubmit];
};

export default useForm;
