import { useState } from "react";
import styles from "./FormularioCompra.module.css";

function FormularioCompra() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        modelo: "",
        quantidade: 1,
        metodoPagamento: "cartao"
    });

    const [mensagem, setMensagem] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoPedido = { ...formData, id: Date.now() };

        try {
            const response = await fetch("http://localhost:5000/compras", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novoPedido),
            });

            if (response.ok) {
                setMensagem({ text: "🎉 Pedido realizado com sucesso!", type: "sucesso" });
                
                // Limpar formulário
                setFormData({
                    nome: "",
                    email: "",
                    telefone: "",
                    endereco: "",
                    modelo: "",
                    quantidade: 1,
                    metodoPagamento: "cartao"
                });

                // Ocultar mensagem após 3 segundos
                setTimeout(() => setMensagem({ text: "", type: "" }), 3000);
            } else {
                setMensagem({ text: "⚠️ Erro ao enviar pedido. Tente novamente.", type: "erro" });
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
            setMensagem({ text: "❌ Erro ao enviar pedido.", type: "erro" });
        }
    };

    return (
        <div className={styles.container}>
            <h1>Formulário de Compra</h1>
            
            {/* Mensagem estilizada */}
            {mensagem.text && (
                <div className={`${styles.mensagem} ${styles[mensagem.type]}`}>
                    {mensagem.text}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Nome Completo:</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Telefone:</label>
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />

                <label>Endereço de Entrega:</label>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />

                <label>Modelo do Microfone:</label>
                <select name="modelo" value={formData.modelo} onChange={handleChange} required>
                    <option value="">Selecione um modelo</option>
                    <option value="Microfone Dinâmico">Microfone Dinâmico</option>
                    <option value="Microfone Condensador">Microfone Condensador</option>
                    <option value="Microfone de Lapela">Microfone de Lapela</option>
                    <option value="Microfone de Cabeça">Microfone de Cabeça</option>
                </select>

                <label>Quantidade:</label>
                <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} min="1" required />

                <label>Método de Pagamento:</label>
                <select name="metodoPagamento" value={formData.metodoPagamento} onChange={handleChange} required>
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="boleto">Boleto Bancário</option>
                    <option value="pix">PIX</option>
                </select>

                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default FormularioCompra;