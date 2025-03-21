import styles from './Sobre.module.css';

import About from '../../Img/about_img.jpg';
import ButtonLink from './ButtonLink';

function Sobre() {
    return (
        <section className={styles.segunda}>
                <div className={styles.segunda_1}>
                    <div>
                        <h1 className={styles.segunda_1_h1}>Página Sobre</h1>
                        <p className={styles.segunda_1_p}>
                            A Jungletic é uma empresa especializada em soluções de som de alta qualidade para diversos tipos de eventos. Com equipamentos de ponta e uma equipe altamente capacitada, garantimos uma experiência sonora impecável, proporcionando áudio cristalino e imersivo para shows, conferências, casamentos e outras ocasiões especiais.
                        </p>
                        <ButtonLink text="Saiba Mais" link="/contato" />
                    </div>
                    <div>
                        <img className={styles.segunda_2} src={About} alt="about" />
                    </div>
                </div>
            
        </section>
    );
}

export default Sobre;
