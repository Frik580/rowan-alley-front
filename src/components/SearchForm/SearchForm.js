import "./SearchForm.css";
import React, { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SearchForm({ onFindCards, queryCardsListText, isErrors }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

    useEffect(() => {
      resetForm();
    }, [resetForm]);
  
    useEffect(() => {
      queryCardsListText
        ? setValues({ name: queryCardsListText })
        : setValues({ name: "" });
    }, [queryCardsListText, setValues]);

  // useEffect(() => {
  //   errors.name ? isErrors(true) : isErrors(false)
  // }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.name);
    onFindCards({
      name: values.name,
    });
    resetForm();
  };

  return (
    <section className="searchform">
      <form className="searchform__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="searchform__form-conteiner">
          <input
            type="text"
            value={values.name ?? ""}
            onChange={handleChange}
            name="name"
            className="searchform__form-item"
            minLength="1"
            maxLength="50"
            placeholder="Найти Героя"
            required
          />
          <button
            disabled={!isValid}
            className={`searchform__form-button ${
              !isValid && "searchform__form-button_disabled"
            }`}
            type="submit"
            name="button"
          />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
