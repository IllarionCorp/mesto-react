import Close_Icon from '../images/Close_Icon.svg';

export default function PopupWithForm(props) {

  return (
    <>
      <div id={props.id} className={`popup ${props.isOpen === true && props.class}`}>
        <div className="popup__container">
          <button type="button" className="popup__close-button" onClick={props.onClose}>
            <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
          </button>
          <h2 className="popup__description">{props.name}</h2>
          <form id={props.id + '-edite'} name="profile-fields" className="fields" noValidate>
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
}
