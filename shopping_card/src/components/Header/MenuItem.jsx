import React from 'react';
import PropTypes from 'prop-types';


const menuLin = document.querySelectorAll('.menu__link');
const showAlert = (e) => {
    const text = e.target.innerHTML;
    alert(text);
}
menuLin.forEach(link => {
    link.addEventListener('click', showAlert);
})

const MenuItem = (props) => {
    return (
        <li>
            <a href={props.href} onClick={showAlert} className="menu__link">
                {props.title}
            </a>
        </li>
    )
}


// при необходимости проверить тип данных у пропсов, можно добавить проверку:
MenuItem.propTypes = {   // здесь propTypes с малой буквы, а ниже с БОЛЬШОЙ!
    href: PropTypes.string.isRequired,  // string, т.к. ожидаем строку, если что другое то меняем и если придёт не 
    title: PropTypes.string.isRequired  // строка то метод в консоль выкинет ошибку
}
export default MenuItem