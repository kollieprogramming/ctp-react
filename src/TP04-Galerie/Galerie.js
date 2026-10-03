import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

function Galerie() {
  return (
    <div>
      <h2>Galerie</h2>

      <img src={img1} alt="Paysage montagneux" width="150" />
      <img src={img2} alt="Paysage naturel" width="150" />
      <img src={img3} alt="Paysage extérieur" width="150" />

      <img
        src="https://picsum.photos/id/1015/150"
        alt="Paysage depuis une source externe"
        width="150"
      />

      <img
        src="https://picsum.photos/id/1016/150"
        alt="Autre paysage depuis une source externe"
        width="150"
      />
    </div>
  );
}

export default Galerie;