import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import styles from './Roudape.module.css';


function Roudape() {
    return (
        <footer className={styles.footer}> 
            <ul className={styles.social_list}>
                <li><a href="https://www.facebook.com/salvadorcamiege.sc/" target='black'><FaFacebook /></a></li>
                <li><a href="https://www.linkedin.com/in/salvador-camiege-564b16288/" target='black'><FaLinkedin /></a></li>
                <li><a href="https://github.com/SalvadorCamiege" target='black'><FaInstagram /></a></li>
                <li><a href="https://github.com/SalvadorCamiege" target='black'><FaGithub /></a></li>
            </ul>
            <p className={styles.paragrafo}>Site Desenvolvido por salvador Camiege, visite as minhas redes sociais.</p>
        </footer>
    );
}

export default Roudape;