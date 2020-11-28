import React from 'react';
import {useDispatch} from "react-redux";
import {clearCart} from "../redux/actions/cart";

const Modal = ({active, setActive}) => {
	const dispatch = useDispatch();

	const setActiveModalWindow = () => {
		setActive(!active);
	};

	const onClearCart = () => {
		dispatch(clearCart());
		setActive(false);
	};

	return (
		<>
			{active && (<div className={'cart__modal'} onClick={setActiveModalWindow}>
				<div className={'modal__content'} onClick={e => e.stopPropagation()}>
					<p>Вы действительно хотите очистить корзину?</p>
					<button onClick={onClearCart}>Да</button>
					<button onClick={setActiveModalWindow}>Нет</button>
				</div>
			</div>)}
		</>


	);
};

export default Modal;