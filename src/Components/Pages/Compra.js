import styles from './Compra.module.css';
import ButtonLink from './ButtonLink';
import compra1 from '../../Img/Compra/mics_img1.jpg';
import compra2 from '../../Img/Compra/mics_img2.jpg';
import compra3 from '../../Img/Compra/mics_img3.jpg';
import compra4 from '../../Img/Compra/mics_img4.jpg';
import compra5 from '../../Img/Compra/mics_img5.jpg';
import compra6 from '../../Img/Compra/mics_img6.jpg';


function Compra() {
    return(
        <section className={styles.Compra}>
               <h1  className={styles.Compra_h1}>Nosso Loja</h1>
               <p className={styles.Compra_p}>
                     A Jungletic é referência quando se trata de equipamentos de som de alta qualidade. Nossa loja de microfones oferece uma ampla variedade de modelos para atender diferentes necessidades, desde apresentações ao vivo, estúdios de gravação, conferências e eventos corporativos.
                </p>
            
            <div className={styles.Compra_2}>
                <div>
                     <img  className={styles.Compra_img} src={compra1} alt="campra1" />
                </div>
                <div>
                     <img className={styles.Compra_img}  src={compra2} alt="compra2" />
                </div>
                <div>
                     <img className={styles.Compra_img}  src={compra3} alt="compra3" />
                </div>
                <div>
                     <img className={styles.Compra_img}  src={compra4} alt="compra4" />
                </div>
                <div>
                     <img className={styles.Compra_img}  src={compra5} alt="compra5" />
                </div>
                <div>
                     <img className={styles.Compra_img}  src={compra6} alt="compra" />
                </div>
                <ButtonLink/>
            </div>

        </section>
    )  
}

export default Compra;