import "./NewsForm.css";

function NewsForm() {
  return (
    <section className="newsform">
      <h2 className="newsform__title">БУДЬТЕ В КУРСЕ НАШИХ НОВОСТЕЙ</h2>
      <div className="newsform__conteiner">
        <form className="newsform__form" noValidate>
          <fieldset className="newsform__form-conteiner">
            <input
              type="text"
              // value={values.name ?? ""}
              // onChange={handleChange}
              name="name"
              className="newsform__form-item"
              minLength="1"
              maxLength="50"
              placeholder="Имя"
              required
            />
          </fieldset>
          <fieldset className="newsform__form-conteiner">
            <input
              type="text"
              // value={values.name ?? ""}
              // onChange={handleChange}
              name="email"
              className="newsform__form-item"
              minLength="1"
              maxLength="50"
              placeholder="Ваш e-mail"
              required
            />
          </fieldset>

          <button
            className="newsform__form-button"
            // disabled={!isValid}
            //     className={`searchform__form-button ${
            //     !isValid && "searchform__form-button_disabled"
            //   }`}
            type="submit"
            name="button"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsForm;
