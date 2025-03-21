import styles from './Button.module.css';

function Button() {
    return(
        <div>
              <input type="submit" value="Reserva Agora" className={styles.button}/>
        </div>
    )  
}

export default Button;