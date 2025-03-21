import styles from './Servicos.module.css';
import Servico1 from '../../Img/Sobre/service1.png';
import Servico2 from '../../Img/Sobre/service2.png';
import Servico3 from '../../Img/Sobre/service3.png';

function Servicos() {
    return (
        <section className={styles.principal}>
            <h1 className={styles.principal_h1}>Nossos Serviços</h1>
            <p className={styles.principal_p}>
                Na Jungletic, oferecemos soluções de som de alta qualidade para todos os tipos de eventos. Nossa equipe especializada garante um áudio cristalino e uma experiência sonora imersiva, independente do porte do evento.
            </p>

            <div className={styles.ponto1}>
                <div className={styles.servico}>
                    <img className={styles.img_circulo} src={Servico1} alt="Linha de microfone"/>
                    <h2 className={styles.servicoh2}>Linha de Microfone</h2>
                    <p className={styles.servicop}>A linha de microfone transmite o som do microfone para caixas de som ou gravadores.</p>
                </div>

                <div className={styles.servico}>
                    <img className={styles.img_circulo} src={Servico2} alt="Suporte para microfone"/>
                    <h2 className={styles.servicoh2}>Suporte para Microfone</h2>
                    <p className={styles.servicop}>O suporte para microfone mantém o microfone estável e na posição ideal, garantindo conforto.</p>
                </div>

                <div className={styles.servico}>
                    <img className={styles.img_circulo} src={Servico3} alt="Microfone de cabeça"/>
                    <h2 className={styles.servicoh2}>Microfone de Cabeça</h2>
                    <p className={styles.servicop}>O microfone de cabeça é leve e ajustável, oferecendo liberdade de movimento e captação.</p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;