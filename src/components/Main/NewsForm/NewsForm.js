import "./NewsForm.css";
import { useForm } from "react-hook-form";

function NewsForm({ onRegister }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  const onHandle = (data) => {
    // console.log(data);
    reset();
    onRegister({
      name: data.name,
      email: data.email,
    });
  };

  return (
    <section className="newsform">
      <h2 className="newsform__title">БУДЬТЕ В КУРСЕ НАШИХ НОВОСТЕЙ</h2>
      <div className="newsform__conteiner">
        <form
          className="newsform__form"
          onSubmit={handleSubmit(onHandle)}
          noValidate
        >
          <fieldset className="newsform__form-conteiner">
            <input
              {...register("name", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value: /^[A-Za-zа-яА-я -]+$/,
                  message:
                    "поле может содержать только буквы, пробел или дефис",
                },
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Максимум 30 символов",
                },
              })}
              type="text"
              className="newsform__form-item"
              placeholder="Имя"
            />

            {errors?.name && (
              <span id="newsform-error" className="newsform__error">
                {errors?.name && <p>{errors?.name?.message ?? "Error!!!"}</p>}
              </span>
            )}
          </fieldset>
          <fieldset className="newsform__form-conteiner">
            <input
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Введите корректный адрес электронной почты",
                },
              })}
              type="email"
              className="newsform__form-item"
              placeholder="Email"
            />

            {errors?.email && (
              <span id="newsform-error" className="newsform__error">
                {errors?.email && <p>{errors?.email?.message ?? "Error!!!"}</p>}
              </span>
            )}
          </fieldset>

          <button
            disabled={!isValid}
            className={`newsform__form-button ${
              !isValid && "newsform__form-button_disabled"
            }`}
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
