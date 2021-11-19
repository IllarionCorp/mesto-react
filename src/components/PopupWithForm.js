import Close_Icon from '../images/Close_Icon.svg';

export default function PopupWithForm(props) {

  return (
    <>
      <div id={props.id} className={`popup ${props.isOpen === true && 'popup_opened'}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={props.onClose}>
            <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
          </button>
          <h2 className="popup__description">{props.name}</h2>
          <form id={props.id + '-edite'} name="profile-fields" className="fields" noValidate>
            {props.children}
            <button id="profile-button" type="submit" className="fields__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
