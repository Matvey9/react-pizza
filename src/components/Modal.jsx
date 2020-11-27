import React from 'react';
import {useDispatch} from "react-redux";
import {clearCart} from "../redux/actions/cart";

const Modal = ({active, setActive}) => {
	const dispatch = useDispatch();

	const setActiveFalse = () => {
		setActive(false);
	};

	const onClearCart = () => {
		dispatch(clearCart());
		setActive(false);
	};

	//todo Использовать библиотеку для классов
	return (
		<div className={active ? 'cart__modal active' : 'cart__modal'} onClick={setActiveFalse}>

			<div className={'modal__content'} onClick={e => e.stopPropagation()}>
				<p>Вы действительно хотите очистить корзину?</p>
				<button onClick={onClearCart}>Да</button>
				<button onClick={setActiveFalse}>Нет</button>
			</div>

		</div>
	);
};

export default Modal;