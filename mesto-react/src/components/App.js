import Close_Icon from '../images/Close_Icon.svg';
import '../index.css';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

  export function handleEditAvatarClick() {
    document.querySelector('#avatar-update').classList.add(open);
   }
  
   export function handleEditProfileClick() {
    // document.querySelector('#profile').classList.add(open)
    console.log(document.querySelector('#profile'));
   }
  
   export function handleAddPlaceClick() {
    // document.querySelector('#add').classList.add(open);
    console.log(document.querySelector('#add'));
    }

 return (
 <>
    <PopupWithForm id="#profile" />
    <PopupWithForm id="#add" />
        {/* <div id="profile" className="popup">
         <div className="popup__container">
            <button type="button" className="popup__close-button">
             <img id="profile-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
            </button>
            <h2 className="popup__description">Редактировать профиль</h2>
            <form id="profile-edite" name="profile-fields" className="fields" noValidate>
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
        <div id="add" className="popup">
         <div className="popup__container">
            <button type="button" className="popup__close-button">
             <img id="add-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
            </button>
            <h2 className="popup__description">Новое место</h2>
            <form id="add-cards" name="add-fields" className="fields" noValidate>
              <input name="title" type="text" id="title" className="fields__input" placeholder="Название" minLength="2" maxLength="30" required />
              <span id="title-error" className="fields__input-error"></span>
              <input name="link" type="url" id="link" className="fields__input" required placeholder="Ссылка на картинку" />
              <span id="link-error" className="fields__input-error"></span>
              <button id="add-button" type="submit" className="fields__submit-button">
                Создать
              </button>
            </form>
         </div>
        </div> */}
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
           <form id="delete-cards" name="delete-form" className="fields fields_delete-card" noValidate>
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
             <form id="avatar-edite" name="avatar-fields" className="fields" noValidate>
               <input name="avatar" type="url" id="avatar" className="fields__input" placeholder="Ссылка на картинку" required />
               <span id="avatar-error" className="fields__input-error"></span>
               <button id="profile-button" type="submit" className="fields__submit-button">
                 Сохранить
               </button>
             </form>
          </div>
         </div>
        <Header />
        <Main />
       <Footer />
  </>
 );
}

export default App;
