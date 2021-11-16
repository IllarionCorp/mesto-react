import React from 'react';
import pen from '../images/pen.svg';
import Vector from '../images/Vector.svg';
import api from '../utils/api';
import Card from './Card';


export default function Main(props) {

	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getAllInfo()
			.then(([resCard, resInfo]) => {
				setUserName(resInfo.name);
				setUserAvatar(resInfo.avatar);
				setUserDescription(resInfo.about);
				setCards(resCard);
			})
			.catch(err => alert("Смэрт профиля: " + err));
	}, []);

	return (
		<>
			<main className="content">
				<section className="profile">
					<div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar}` }}>
						<button type="button" className="profile__button-edite-avatar" onClick={props.onEditAvatar}></button>
					</div>
					<div className="profile__info">
						<h1 className="profile__nickname">{userName}</h1>
						<p className="profile__profession">{userDescription}</p>
						<button type="button" className="profile__button-edite" onClick={props.onEditProfile}>
							<img src={pen} className="profile__image-edite" alt="Картинка с ручкой для окна редактирования профиля" />
						</button>
					</div>
					<button type="button" className="profile__button-add" onClick={props.onAddPlace}>
						<img src={Vector} className="profile__image-add" alt="Картинка с плюсиком" />
					</button>
				</section>
				<section className="elements"> {cards.map((data, i) =>
					<Card key={i} card={data} onCardClick={props.onCardClick} />
				)}</section>
			</main>
		</>
	);
}



