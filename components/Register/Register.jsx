import React from "react";
import s from "./Register.module.css";
const Register = () => {
  return (
    <div className={s.container_register}>
      <div className={s.register_back}>
        <div className={s.register_all}>
          <h1>
            Всем своим покупателем <br /> мы говорим: <br />
            «Глупый вопрос — не <br /> заданный вопрос!» 
          </h1>
          <img src="./smile.svg" alt="smile" />
          <p>
            Так что не стесняйтесь! Пишите, <br /> звоните, консультируйтесь. Мы{" "}
            <br /> всегда рады Вам помочь!
          </p>
        </div>
        <div className={s.register_choice}>
          <input type="text" Ваше имя />
          <input type="text" />
          <div className={s.register_choice_title}>
            <p>Предпочтительный способ связи:</p>  
                  <button>Отправить</button>

          </div>
        </div>
        {/* <div className={s.register_choice_select}>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
