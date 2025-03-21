import { useNavigate } from "react-router-dom"; 
import styles from './ButtonLink.module.css';

function ButtonLink() {
    const navigate = useNavigate(); // Hook para navegação

    const handleNavigate = () => {
        navigate("/formulario-compra"); // Redireciona ao formulário de compra
    };

    return (
        <div>
            <input 
                type="submit" 
                value="Compra Artigo" 
                className={styles.button} 
                onClick={handleNavigate} // Chama a função ao clicar
            />
        </div>
    );
}

export default ButtonLink;