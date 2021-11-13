import React from 'react';
import pen from '../images/pen.svg';
import Vector from '../images/Vector.svg';
import { api } from '../utils/Api';
import Cards from './Cards';


export default function Main() {

 const open = 'popup_opened';
 const [userName, setUserName] = React.useState('');
 const [userDescription, setUserDescription] = React.useState();
 const [userAvatar, setUserAvatar] = React.useState();
 const [cards, setCards] = React.useState([]);

 React.useEffect(() => {
  api.getAllInfo()
  .then(([resCard, resInfo]) => {
   setUserName(resInfo.name);
   setUserAvatar(resInfo.avatar);
   setUserDescription(resInfo.about);
   setCards(resCard);
  })
  .catch(err => alert("Смэрт профиля" + err));
 }, []);


//  function handleEditAvatarClick() {
//   document.querySelector('#avatar-update').classList.add(open);
//  }

//  function handleEditProfileClick() {
//   // document.querySelector('#profile').classList.add(open)
//   console.log(document.querySelector('#profile'));
//  }

//  function handleAddPlaceClick() {
//   // document.querySelector('#add').classList.add(open);
//   console.log(document.querySelector('#add'));
//   }

    return (
     <>
      <main className="content">
          <section className="profile">
           <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar}`}}>
            <button type="button" className="profile__button-edite-avatar" onClick={handleEditAvatarClick}></button>
           </div>
            <div className="profile__info">
              <h1 className="profile__nickname">{userName}</h1>
              <p className="profile__profession">{userDescription}</p>
              <button type="button" className="profile__button-edite" onClick={handleEditProfileClick}>
                  <img src={pen} className="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля" />
              </button>
            </div>
            <button type="button" className="profile__button-add" onClick={handleAddPlaceClick}>
                <img src={Vector} className="profile__image-add" alt="Картинка с плюсиком" />
            </button>
          </section>
          <section className="elements"> {cards.map((data, i) => 
          <Cards key={i} link={data.link} name={data.name} likes = {data.likes} />
        )}</section>
        </main>        
     </>
    );
}
