import { useState } from "react";
import styles from './Contactos.module.css';

const Contactos = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    msg: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contactos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccessMessage("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", telefone: "", msg: "" });
      } else {
        setSuccessMessage("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSuccessMessage("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="msg"
          placeholder="Mensagem"
          value={formData.msg}
          onChange={handleChange}
          className={styles.textarea}
          required
        ></textarea>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Contactos;
