import React from "react";

function ProduitInline(props) {
    // Ici on définit les styles en ligne avec un objet JS
    const styleProduit = {
        border: "2px solid #2196f3",
        backgroundColor: "#e3f2fd",
        borderRadius: "8px",
        padding: "10px",
        width: "220px",
        textAlign: "center",
        margin: "10px"
    };

    return (
        <div style={styleProduit}>
            <h3>{props.nom}</h3>
            <p>Prix : {props.prix} DH</p>
        </div>
    );
}

export default ProduitInline;