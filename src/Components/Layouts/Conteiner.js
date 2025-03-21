import styles from './Conteiner.module.css'; 

function Conteiner({ children, customClass }) {
    return (
        <div className={`${styles.conteiner} ${customClass ? styles[customClass] : ''}`}>
            {children}
        </div>
    );
}

export default Conteiner;