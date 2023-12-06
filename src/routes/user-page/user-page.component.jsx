import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { updateUserDoc } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import "./user-page.styles.scss";

const UserPage = () => {
    const { userInfo, currentUser } = useContext(UserContext);

    const [formFields, setFormFields] = useState(userInfo);

    useEffect(() => {
        setFormFields(userInfo);
    }, [userInfo]);

    const {
        displayName,
        birthday,
        city,
        email,
        number,
        skill,
        mentor,
        choisedPackage,
    } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUserDoc(currentUser, formFields);
            alert("Профиль обновлен");
        } catch (error) {
            alert("Произошла ошибка при обновлении профиля", error);
        }
    };

    return (
        <div className="user-container">
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="ФИО"
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName || ""}
                />

                <FormInput
                    label="Дата рождения"
                    required
                    type="text"
                    onChange={handleChange}
                    name="birthday"
                    value={birthday || ""}
                />

                <FormInput
                    label="Город"
                    required
                    type="text"
                    onChange={handleChange}
                    name="city"
                    value={city || ""}
                />

                <FormInput
                    label="Email"
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email || ""}
                />

                <FormInput
                    label="Номер телефона"
                    required
                    type="tel"
                    onChange={handleChange}
                    name="number"
                    value={number || ""}
                />

                <FormInput
                    label="ФИО Руководителя"
                    type="text"
                    onChange={handleChange}
                    name="mentor"
                    value={mentor || ""}
                />

                <select name="skill" onChange={handleChange}>
                    <option defaultValue="выбрать">{skill}</option>
                    <option>дебют</option>
                    <option>начинающие</option>
                    <option>продолжающие</option>
                    <option>профессионалы</option>
                </select>

                <select name="choisedPackage" onChange={handleChange}>
                    <option defaultValue="выбрать">{choisedPackage}</option>
                    <option>MAXI</option>
                    <option>MIDI</option>
                    <option>MINI</option>
                    <option>KIDS</option>
                    <option>STUDY</option>
                </select>

                <Button type="submit">Сохранить</Button>
            </form>
        </div>
    );
};
export default UserPage;
