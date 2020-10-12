import React, {useState} from 'react';
import Button from '../../Button/Button';
import './RequestForm.css';

export default function RequestForm(props) {
    const userEmail = ''; // при необходимости можно подставить email пользователя (если известен)
    const [email, setEmail] = useState(userEmail);

    const onChange = event => setEmail(event.target.value);

    let showForm = true;

    const onSubmit = (event) => {
        event.preventDefault();
        showForm = false;
    }

    const btnSubmit = {
        text: "Хочу получить письмо",
        theme: "turquoise",
        action: onSubmit,
    };
    
    const btnBack = {
        text: "Вернуться назад",
        theme: "turquoise_inverted",
        action: {},
    };
    
    const btnToProfile = {
        text: "Вернуться в профиль",
        theme: "turquoise-letter",
        action: {},
    };

    const btnTmpl = (btn) => {
        return (
            <Button 
                text={btn.text}
                theme={btn.theme}
                action={btn.action}
            />
        )
    }

    let form;

    if (showForm) {
        form = <form className="under-construction__form">
            <p className="under-construction__form__headline">Вы можете оставить свою почту<br></br>и мы сообщим вам, как только раздел будет готов!</p>
            <span>
                <input 
                    type="text"
                    placeholder="Введите почту"
                    value={email}
                    onChange={onChange}
                    className="under-construction__form__email"
                />
                {btnTmpl(btnSubmit)}
            </span>
            {btnTmpl(btnBack)}
        </form>
    } else {
        form = <form className="under-construction__form">
            <p className="under-construction__form__headline">Ваш запрос отправлен! Мы сообщим вам, как только раздел будет готов!</p>
            {btnTmpl(btnToProfile)}
        </form>
    }

    return (
        form
    );
}