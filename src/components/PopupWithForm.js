import Close_Icon from '../images/Close_Icon.svg';

export default function PopupWithForm(props) {
 console.log(props.id);
 return (
      <>
       <div id={props.id} className="popup">
         <div className="popup__container">
            <button type="button" className="popup__close-button">
             <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
            </button>
            <h2 className="popup__description">Редактировать профиль</h2>
            <form id={props.id + 'edite'} name="profile-fields" className="fields" noValidate>
              <input name="name" type="text" id="name" className="fields__input" minLength="2" maxLength="40" required />
              <span id="name-error" className="fields__input-error"></span>
              <input name="about" type="text" id="about" className="fields__input" minLength="2" maxLength="200" required />
              <span id="about-error" className="fields__input-error"></span>
              <button id="profile-button" type="submit" className="fields__submit-button">
                Сохранить
              </button>
            </form>
           </div>
         </div>
       </>
 );
}
