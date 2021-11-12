import React from 'react';
import pen from '../images/pen.svg';
import Vector from '../images/Vector.svg';
import { api } from '../utils/Api';

export default function Main() {

 const open = 'popup_opened';
 const [userName, setUserName] = React.useState();
 const [userDescription, setUserDescription] = React.useState();
 const [userAvatar, setUserAvatar] = React.useState();

 React.useEffect(() => {
  const userInfo = api.getUserInfo();

  setUserName(
   userInfo
     .then(res => {
       console.log(res.name);
       return res.name;
     }));
 });


 function handleEditAvatarClick() {
  document.querySelector('#avatar-update').classList.add(open);
 }

 function handleEditProfileClick() {
  // document.querySelector('#profile').classList.add(open)
  console.log(document.querySelector('#profile'));
 }

 function handleAddPlaceClick() {
  document.querySelector('#add').classList.add(open);
  }

    return (
     <>
      <main className="content">
          <section className="profile">
           <div className="profile__avatar">
            <button type="button" className="profile__button-edite-avatar" onClick={handleEditAvatarClick}></button>
           </div>
            <div className="profile__info">
              <h1 className="profile__nickname">{userName}</h1>
              <p className="profile__profession"></p>
              <button type="button" className="profile__button-edite" onClick={handleEditProfileClick}>
                  <img src={pen} className="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля" />
              </button>
            </div>
            <button type="button" className="profile__button-add" onClick={handleAddPlaceClick}>
                <img src={Vector} className="profile__image-add" alt="Картинка с плюсиком" />
            </button>
          </section>
          <section className="elements"></section>
        </main>
     </>
    );
}
