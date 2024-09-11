import style from './Footer.module.css';

const Footer = (props) => {
    const { creator } = props;

    return (
        <div className={style.Footer}>
            React Básico - 2024 - {creator}
        </div>
    );
};

export { Footer };