import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranke | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em cotato.</h1>
        <ul className={styles.dados}>
          <li>email@contato.com</li>
          <li>98558-4512</li>
          <li>Rua ali perto</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
