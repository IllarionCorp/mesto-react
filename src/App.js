import Close_Icon from './images/Close_Icon.svg';
import pen from './images/pen.svg';
import Vector from './images/Vector.svg';
import logo from './images/logo.svg';
import Trash from './images/Trash.svg';
import Avatar from './images/Avatar.svg';
import './index.css';

function App() {
  return (
    <body class="page">

  <div id="profile" class="popup">
   <div class="popup__container">
      <button type="button" class="popup__close-button">
       <img id="profile-closed" src="<%=require('./images/Close_Icon.svg')%>" class="popup__close-icon" alt="крестик для закрытия диалогового окна">
      </button>
      <h2 class="popup__description">Редактировать профиль</h2>
      <form id="profile-edite" name="profile-fields" class="fields" novalidate>
        <input name="name" type="text" id="name" class="fields__input" minlength="2" maxlength="40" required>
        <span id="name-error" class="fields__input-error"></span>
        <input name="about" type="text" id="about" class="fields__input" minlength="2" maxlength="200" required>
        <span id="about-error" class="fields__input-error"></span>
        <button id="profile-button" type="submit" class="fields__submit-button">
          Сохранить
        </button>
      </form>
   </div>
  </div>

  <div id="add" class="popup">
   <div class="popup__container">
      <button type="button" class="popup__close-button">
       <img id="add-closed" src="<%=require('./images/Close_Icon.svg')%>" class="popup__close-icon" alt="крестик для закрытия диалогового окна">
      </button>
      <h2 class="popup__description">Новое место</h2>
      <form id="add-cards" name="add-fields" class="fields" novalidate>
        <input name="title" type="text" id="title" class="fields__input" placeholder="Название" minlength="2" maxlength="30" required>
        <span id="title-error" class="fields__input-error"></span>
        <input name="link" type="url" id="link" class="fields__input" required placeholder="Ссылка на картинку">
        <span id="link-error" class="fields__input-error"></span>
        <button id="add-button" type="submit" class="fields__submit-button">
          Создать
        </button>
      </form>
   </div>
  </div>

  <div id="image" class="popup">
   <div class="popup__cont-img">
    <button type="button" class="popup__close-button">
     <img id="image-closed" src="<%=require('./images/Close_Icon.svg')%>" class="popup__close-icon" alt="крестик для закрытия диалогового окна">
    </button>
    <img src="." class="popup__image" alt="Изображение в карточке">
    <p class="popup__label"></p>
   </div>
  </div>

  <div id="delete-card" class="popup">
    <div class="popup__container">
     <button type="button" class="popup__close-button">
      <img src="<%=require('./images/Close_Icon.svg')%>" class="popup__close-icon" alt="крестик для закрытия диалогового окна">
     </button>
     <h2 class="popup__description">Вы уверены?</h2>
     <form id="delete-cards" name="delete-form" class="fields fields_delete-card" novalidate>
      <button id="delete-button" type="submit" class="fields__submit-button fields__submit-button_delete">
        Да
      </button>
     </form>
    </div>
   </div>

   <div id="avatar-update" class="popup">
    <div class="popup__container">
       <button type="button" class="popup__close-button">
        <img src="<%=require('./images/Close_Icon.svg')%>" class="popup__close-icon" alt="крестик для закрытия диалогового окна">
       </button>
       <h2 class="popup__description">Обновить аватар</h2>
       <form id="avatar-edite" name="avatar-fields" class="fields" novalidate>
         <input name="avatar" type="url" id="avatar" class="fields__input" placeholder="Ссылка на картинку" required>
         <span id="avatar-error" class="fields__input-error"></span>
         <button id="avatar-button" type="submit" class="fields__submit-button">
           Сохранить
         </button>
       </form>
    </div>
   </div>

  <header class="header">
    <img src="<%=require('./images/logo.svg')%>" class="header__logo" alt="Лого место в шапке">
  </header>
  <main class="content">
    <section class="profile">
     <div class="profile__avatar">
      <button type="button" class="profile__button-edite-avatar"></button>
     </div>
      <div class="profile__info">
        <h1 class="profile__nickname"></h1>
        <p class="profile__profession"></p>
        <button type="button" class="profile__button-edite">
            <img src="<%=require('./images/pen.svg')%>" class="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля">
        </button>
      </div>
      <button type="button" class="profile__button-add">
          <img src="<%=require('./images/Vector.svg')%>" class="profile__image-add" alt="Картинка с плюсиком">
      </button>
    </section>

    <section class="elements"></section>
  </main>

  <template id="card-template">
   <div class="element">
    <img src="." class="element__image" alt="Пользовательское изображение">
    <button id="" type="button" class="element__trash">
     <img src="<%=require('./images/Trash.svg')%>" class="element__trash-image"  alt="Иконка для удаления карточки">
    </button>
    <div class="element__footer">
      <h2 class="element__place-name"></h2>
      <div class="element__like-container">
       <button type="button" class="element__like"></button>
       <p class="element__like-counter">0</p>
      </div>
    </div>
   </div>
  </template>

  <footer class="footer">
    <p class="footer__copyright">&copy; 2021. Mesto Russia</p>
  </footer>
</body>
  );
}

export default App;
