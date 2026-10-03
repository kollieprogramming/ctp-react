import React, { useState } from "react";
import "./App.css";

import ProduitInline from "./TP02-ProduitInline/ProduitInline";
import ProfilModule from "./TP03-Profil/ProfilModule";
import Galerie from "./TP04-Galerie/Galerie";
import BoutonAnime from "./TP05-Animation/BoutonAnime";
import ListeTaches from "./TP06-ListeTaches/ListeTaches";
import ListeTachesFiltrees from "./TP07-ListeTachesFiltrees/ListeTachesFiltrees";
import MessageRole from "./TP08-MessageRole/MessageRole";
import AjouterTache from "./TP09-AjouterTache/AjouterTache";
import SupprimerTache from "./TP10-SupprimerTache/SupprimerTache";
import FormulaireMulti from "./TP11-FormulaireMulti/FormulaireMulti";
import FormulaireValidation from "./TP12-FormulaireValidation/FormulaireValidation";
import FormulaireReset from "./TP13-FormulaireReset/FormulaireReset";
import FormulaireListe from "./TP14-FormulaireListe/FormulaireListe";
import ListePosts from "./TP15-ListePosts/ListePosts";
import ListePostsErreur from "./TP16-ListePostsErreur/ListePostsErreur";
import Compteur from "./TP17-Compteur/Compteur";
import Timer from "./TP18-Timer/Timer";
import UtilisateursAxios from "./TP19-UtilisateursAxios/UtilisateursAxios";
import CompteurClics from "./TP20-CompteurClics/CompteurClics";

import photoProfil from "./TP03-Profil/photo.jpg";

function App() {
  const [selectedTP, setSelectedTP] = useState(null);

  const exercices = [
    {
      numero: "TP02",
      titre: "Produit avec Props",
      dossier: "TP02-ProduitInline",
      component: (
        <div className="demo-content">
          <ProduitInline nom="T-shirt" prix={150} />
          <ProduitInline nom="Casquette" prix={80} />
        </div>
      ),
    },

    {
      numero: "TP03",
      titre: "Profil avec CSS Module",
      dossier: "TP03-Profil",
      component: (
        <div className="demo-content">
          <ProfilModule
            nom="Khalid"
            prenom="Ali"
            photo={photoProfil}
          />

          <ProfilModule
            nom="Sara"
            prenom="Meriem"
            photo={photoProfil}
          />
        </div>
      ),
    },

    {
      numero: "TP04",
      titre: "Galerie d'images",
      dossier: "TP04-Galerie",
      component: <Galerie />,
    },

    {
      numero: "TP05",
      titre: "Animation CSS",
      dossier: "TP05-Animation",
      component: <BoutonAnime />,
    },

    {
      numero: "TP06",
      titre: "Liste des tâches",
      dossier: "TP06-ListeTaches",
      component: <ListeTaches />,
    },

    {
      numero: "TP07",
      titre: "Filtrer les tâches",
      dossier: "TP07-ListeTachesFiltrees",
      component: <ListeTachesFiltrees />,
    },

    {
      numero: "TP08",
      titre: "Message selon le rôle",
      dossier: "TP08-MessageRole",
      component: (
        <div className="demo-content">
          <MessageRole role="admin" />
          <MessageRole role="user" />
          <MessageRole role="invite" />
        </div>
      ),
    },

    {
      numero: "TP09",
      titre: "Ajouter une tâche",
      dossier: "TP09-AjouterTache",
      component: <AjouterTache />,
    },

    {
      numero: "TP10",
      titre: "Supprimer une tâche",
      dossier: "TP10-SupprimerTache",
      component: <SupprimerTache />,
    },

    {
      numero: "TP11",
      titre: "Formulaire multi-champs",
      dossier: "TP11-FormulaireMulti",
      component: <FormulaireMulti />,
    },

    {
      numero: "TP12",
      titre: "Validation du formulaire",
      dossier: "TP12-FormulaireValidation",
      component: <FormulaireValidation />,
    },

    {
      numero: "TP13",
      titre: "Réinitialiser un formulaire",
      dossier: "TP13-FormulaireReset",
      component: <FormulaireReset />,
    },

    {
      numero: "TP14",
      titre: "Formulaire et liste",
      dossier: "TP14-FormulaireListe",
      component: <FormulaireListe />,
    },

    {
      numero: "TP15",
      titre: "Récupérer des posts",
      dossier: "TP15-ListePosts",
      component: <ListePosts />,
    },

    {
      numero: "TP16",
      titre: "Gestion des erreurs",
      dossier: "TP16-ListePostsErreur",
      component: <ListePostsErreur />,
    },

    {
      numero: "TP17",
      titre: "Compteur avec classe",
      dossier: "TP17-Compteur",
      component: <Compteur />,
    },

    {
      numero: "TP18",
      titre: "Timer avec cycle de vie",
      dossier: "TP18-Timer",
      component: <Timer />,
    },

    {
      numero: "TP19",
      titre: "API avec Axios",
      dossier: "TP19-UtilisateursAxios",
      component: <UtilisateursAxios />,
    },

    {
      numero: "TP20",
      titre: "Compteur de clics",
      dossier: "TP20-CompteurClics",
      component: <CompteurClics />,
    },
  ];

  const exerciceSelectionne = exercices.find(
    (exercice) => exercice.numero === selectedTP
  );

  return (
    <div className="app">

      <header className="hero">
        <div className="hero-content">

          <span className="badge">
            REACT • TP 02 → TP 20
          </span>

          <h1>
            React Practice Portfolio
          </h1>

          <p>
            Une collection de travaux pratiques pour apprendre
            les composants, les props, le state, les formulaires,
            les API et les classes React.
          </p>

        </div>
      </header>

      <main className="container">

        {selectedTP === null ? (

          <>
            <div className="section-header">

              <div>
                <span className="section-label">
                  MES TRAVAUX
                </span>

                <h2>
                  Exercices React
                </h2>
              </div>

              <span className="count">
                {exercices.length} exercices
              </span>

            </div>

            <div className="exercise-grid">

              {exercices.map((exercice) => (

                <button
                  className="exercise-card"
                  key={exercice.numero}
                  onClick={() => setSelectedTP(exercice.numero)}
                >

                  <div className="card-top">

                    <span className="tp-number">
                      {exercice.numero}
                    </span>

                    <span className="arrow">
                      ↗
                    </span>

                  </div>

                  <h3>
                    {exercice.titre}
                  </h3>

                  <p>
                    Exercice pratique React avec le composant{" "}
                    <strong>
                      {exercice.dossier}
                    </strong>
                    .
                  </p>

                  <div className="card-footer">

                    <span>React</span>
                    <span>JSX</span>

                  </div>

                </button>

              ))}

            </div>
          </>

        ) : (

          <section className="exercise-view">

            <button
              className="back-button"
              onClick={() => setSelectedTP(null)}
            >
              ← Retour aux exercices
            </button>

            <div className="exercise-header">

              <span className="tp-number">
                {exerciceSelectionne.numero}
              </span>

              <h2>
                {exerciceSelectionne.titre}
              </h2>

              <p>
                {exerciceSelectionne.dossier}
              </p>

            </div>

            <div className="exercise-demo">
              {exerciceSelectionne.component}
            </div>

          </section>

        )}

      </main>

      <footer>
        <p>
          React Practice Portfolio • TP02 → TP20
        </p>
      </footer>

    </div>
  );
}

export default App;