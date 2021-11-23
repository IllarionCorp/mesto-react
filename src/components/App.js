import React from 'react';
import '../index.css';
import api from '../utils/api';
import Footer from './Footer';
import Header from './Header.js';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../cotexts/CurrentUserContext';
import EditeProfilePopup from './EditeProfilePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ cardInfo: {}, open: false });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllInfo()
      .then(([resCard, resInfo]) => {
        setCurrentUser(resInfo);
        setCards(resCard);
      })
      .catch(err => alert("Смэрт запроса к API: " + err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ cardInfo: card, open: true });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked === false) {
      api.putMyLike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch(err => alert("Cмэрт постановки лайка: "  + err));
    } else {
      api.deleteMyLike(card._id).then((newCard) =>{
        setCards((state) => state.map(c => c._id === card._id ? newCard : c));
      }).catch(err => alert("Смэрт снятия лайка: " + err));
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(setCards(list => list.filter(c => c._id !== card._id && c))).catch(err => alert("Смэрт удаления карточки: " + err));
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ cardInfo: {}, open: false })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <EditeProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm id="#add" name="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input name="title" type="text" id="title" className="fields__input" placeholder="Название" minLength="2" maxLength="30" required />
          <span id="title-error" className="fields__input-error"></span>
          <input name="link" type="url" id="link" className="fields__input" required placeholder="Ссылка на картинку" />
          <span id="link-error" className="fields__input-error"></span>
        </PopupWithForm>
        <PopupWithForm id="avatar-update" name="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input name="avatar" type="url" id="avatar" className="fields__input" placeholder="Ссылка на картинку" required />
          <span id="avatar-error" className="fields__input-error"></span>
        </PopupWithForm>
        <PopupWithForm id="delete-card" name="Вы уверены?" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        {/* <div id="delete-card" className="popup">
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
        </div> */}
        <Header />
        <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike}
        onCardDelete={handleCardDelete} />
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
