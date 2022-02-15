import React from "react";
import { Link } from "react-router-dom";

/**
 * Render error 404 page
 * @return {JSX}
 */
export default function ErrorPage() {
  document.title = "SportSee - Erreur";
  return (
    <div className="errorPageContainer">
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <div className="backHome">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}
