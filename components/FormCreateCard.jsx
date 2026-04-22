import { useForm } from "react-hook-form";
import "./FormCreateCards.css";

export function FormCreateCards() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            fronttext: "",
            backtext: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Создана карточка:", data);

        reset(); 
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__item">
                <label htmlFor="fronttext">Передняя сторона карточки:</label>
                <input
                    type="text"
                    id="fronttext"
                    {...register("fronttext", {
                        required: "Поле 'Передняя сторона' обязательно для заполнения",
                        minLength: {
                            value: 1,
                            message: "Минимум 1 символ"
                        },
                        maxLength: {
                            value: 100,
                            message: "Максимум 100 символов"
                        }
                    })}
                />
                {errors.fronttext && (
                    <p className="error-msg">{errors.fronttext.message}</p>
                )}
            </div>

            <div className="form__item">
                <label htmlFor="backtext">Задняя сторона карточки:</label>
                <input
                    type="text"
                    id="backtext"
                    {...register("backtext", {
                        required: "Поле 'Задняя сторона' обязательно для заполнения",
                        minLength: {
                            value: 1,
                            message: "Минимум 1 символ"
                        },
                        maxLength: {
                            value: 100,
                            message: "Максимум 100 символов"
                        }
                    })}
                />
                {errors.backtext && (
                    <p className="error-msg">{errors.backtext.message}</p>
                )}
            </div>

            <div className="form__item">
                <input type="submit" value="Создать карточку" />
            </div>
        </form>
    );
}