import React from "react";
import styles from "./Profil.module.css";

function ProfilModule(props) {
  return (
    <div className={styles.carte}>
      <img src={props.photo} alt="Profil" />
      <h3>{props.nom} {props.prenom}</h3>
    </div>
  );
}

export default ProfilModule;