import React from "react";
import { useForm } from "react-hook-form";
import "./FormCreateSet.css";

export function FormCreateSet() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            description: ""
        }
    });

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if(count !== 0){
            console.log(`Отправка формы: ${count}`);
            alert(`Отправка формы: ${count}`);
        }

    });

    return (
        <form className="form-container" onSubmit={handleSubmit((data) => {
            setCount(count + 1);
            console.log(data);
        },[count])}>
            <div className="form__item">
                <label htmlFor="name">Название набора:</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Заполните поле Название набора",
                        minLength: {
                            value: 4,
                            message: "Название набора должно содержать минимум 4 символа"
                        }
                    })}
                />
                <p className="error-msg">{errors.name?.message}</p>
            </div>

            <div className="form__item">
                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    rows="3"
                    {...register("description", {
                        required: "Заполните поле Описание набора"
                    })}
                />
                <p className="error-msg">{errors.description?.message}</p>
            </div>

            <div className="form__item">
                <input type="submit" value="Создать набор" />
            </div>
        </form>
    );
}