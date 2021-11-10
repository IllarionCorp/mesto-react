import Close_Icon from './images/Close_Icon.svg';
import pen from './images/pen.svg';
import Vector from './images/Vector.svg';
import logo from './images/logo.svg';
import Trash from './images/Trash.svg';
import './index.css';

function App() {
  return (
    <body className="page">

  <div id="profile" className="popup">
   <div className="popup__container">
      <button type="button" className="popup__close-button">
       <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
      </button>
      <h2 className="popup__description">Редактировать профиль</h2>
      <form id="profile-edite" name="profile-fields" className="fields" novalidate>
        <input name="name" type="text" id="name" className="fields__input" minlength="2" maxlength="40" required />
        <span id="name-error" className="fields__input-error"></span>
        <input name="about" type="text" id="about" className="fields__input" minlength="2" maxlength="200" required />
        <span id="about-error" className="fields__input-error"></span>
        <button id="profile-button" type="submit" className="fields__submit-button">
          Сохранить
        </button>
      </form>
   </div>
  </div>

  <div id="add" className="popup">
   <div className="popup__container">
      <button type="button" className="popup__close-button">
       <img id="add-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
      </button>
      <h2 className="popup__description">Новое место</h2>
      <form id="add-cards" name="add-fields" className="fields" novalidate>
        <input name="title" type="text" id="title" className="fields__input" placeholder="Название" minlength="2" maxlength="30" required />
        <span id="title-error" className="fields__input-error"></span>
        <input name="link" type="url" id="link" className="fields__input" required placeholder="Ссылка на картинку" />
        <span id="link-error" className="fields__input-error"></span>
        <button id="add-button" type="submit" className="fields__submit-button">
          Создать
        </button>
      </form>
   </div>
  </div>

  <div id="image" className="popup">
   <div className="popup__cont-img">
    <button type="button" className="popup__close-button">
     <img id="image-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
    </button>
    <img src="." className="popup__image" alt="Изображение в карточке" />
    <p className="popup__label"></p>
   </div>
  </div>

  <div id="delete-card" className="popup">
    <div className="popup__container">
     <button type="button" className="popup__close-button">
      <img id="image-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" /> 
     </button>
     <h2 className="popup__description">Вы уверены?</h2>
     <form id="delete-cards" name="delete-form" className="fields fields_delete-card" novalidate>
      <button id="delete-button" type="submit" className="fields__submit-button fields__submit-button_delete">
        Да
      </button>
     </form>
    </div>
   </div>

   <div id="avatar-update" className="popup">
    <div className="popup__container">
       <button type="button" className="popup__close-button">
        <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
       </button>
       <h2 className="popup__description">Обновить аватар</h2>
       <form id="avatar-edite" name="avatar-fields" className="fields" novalidate>
         <input name="avatar" type="url" id="avatar" className="fields__input" placeholder="Ссылка на картинку" required />
         <span id="avatar-error" className="fields__input-error"></span>
         <button id="profile-button" type="submit" className="fields__submit-button">
           Сохранить
         </button>
       </form>
    </div>
   </div>

  <header className="header">
    <img src={logo} className="header__logo" alt="Лого место в шапке" />
  </header>
  <main className="content">
    <section className="profile">
     <div className="profile__avatar">
      <button type="button" className="profile__button-edite-avatar"></button>
     </div>
      <div className="profile__info">
        <h1 className="profile__nickname"></h1>
        <p className="profile__profession"></p>
        <button type="button" className="profile__button-edite">
            <img src={pen} className="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля" />
        </button>
      </div>
      <button type="button" className="profile__button-add">
          <img src={Vector} className="profile__image-add" alt="Картинка с плюсиком" />
      </button>
    </section>

    <section className="elements"></section>
  </main>

  <template id="card-template">
   <div className="element">
    <img src="." className="element__image" alt="Пользовательское изображение" />
    <button id="" type="button" className="element__trash">
     <img src={Trash} className="element__trash-image"  alt="Иконка для удаления карточки" />
    </button>
    <div className="element__footer">
      <h2 className="element__place-name"></h2>
      <div className="element__like-container">
       <button type="button" className="element__like"></button>
       <p className="element__like-counter">0</p>
      </div>
    </div>
   </div>
  </template>

  <footer className="footer">
    <p className="footer__copyright">&copy; 2021. Mesto Russia</p>
  </footer>
</body>
  );
}

export default App;
