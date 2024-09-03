import { BUTTON_TYPE } from './constants';

import style from './Button.module.css';

const Button = (props) => {
    const { text, type = BUTTON_TYPE.PRIMARY, ...otherProps } = props;
    return (
        <button className={style.Button} type={type} {...otherProps}> 
            {text}
        </button>
    );
};

export { Button };