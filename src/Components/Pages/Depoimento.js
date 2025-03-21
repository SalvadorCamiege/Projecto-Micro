import { useState } from "react";
import styles from "./Depoimento.module.css";

function Depoimentos() {
    const depoimentos = [
        "A empresa Yellen destaca que nosso SON (Self-Organizing Network) oferece eficiência e inovação, garantindo otimização automática da rede, melhor cobertura e maior qualidade de serviço para os usuários.",
        
        "A empresa Angofilhos, com anos de experiência no setor, garante soluções inovadoras e suporte técnico excepcional, assegurando sempre a satisfação dos nossos clientes.",
        
        "A empresa Angola Café destaca nosso compromisso com a qualidade e inovação dos nossos equipamentos de som, permitindo oferecer serviços que realmente fazem a diferença no dia a dia dos seus clientes."
    ];

    const [index, setIndex] = useState(0);

    return (
        <section className={styles.depoimentos}>
            <h2 className={styles.titulo}>O que dizem nossos clientes</h2>
            <div className={styles.depoimento_box}>
                <p className={styles.depoimento}>{depoimentos[index]}</p>
            </div>
            <div className={styles.botoes_slide}>
                {depoimentos.map((_, i) => (
                    <button 
                        key={i} 
                        className={i === index ? styles.active : ""} 
                        onClick={() => setIndex(i)}
                    >
                        ●
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Depoimentos;
