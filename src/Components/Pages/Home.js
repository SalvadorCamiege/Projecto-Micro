
import styles from "./Home.module.css";
import Servicos from "./Servicos";
import Contactos from "./Contactos";
import Sobre from "./Sobre";
import Compra from "./Compra";
import Button from "./Button";
import micro from "../../Img/right_side.png";
import Depoimentos from "../Pages/Depoimento";

function Home() {
   
    return (
        <div>
            <section className={styles.text_home}>
                  <div>
                        <h1 className={styles.titulo}>Microfone De Ar</h1>
                        <p className={styles.paragrafo}>O Microfone de Ar é uma inovação tecnológica que capta e transmite áudio sem a necessidade de contato físico direto. Utilizando ondas sonoras direcionadas, ele permite uma comunicação mais limpa e eficiente, reduzindo ruídos externos e melhorando a qualidade do som.</p>
                        <Button/>
                    </div>

                    <div className={styles.img}>
                        <img className={styles.img_img} src={micro} alt="micro"/>  
                    </div>
            </section>
       
            <section>
                <Sobre/> 
            </section>

            <section>
                <Servicos/> 
            </section>

            <section>
                <Compra/> 
            </section>

            <section>
                <Depoimentos/> 
            </section>

            <section>
                <Contactos/> 
            </section>
        </div>
    );
}

export default Home;
