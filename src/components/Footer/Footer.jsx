import style from './Footer.module.css';

const Footer = (props) => {
    const { creatorName } = props;

    return (
        <div className={style.Footer}>
            React Básico - 2024 - {creatorName}
        </div>
    );
};

export { Footer };