/**
 * Route inconnue : on fabrique une erreur 404 et on la passe au gestionnaire.
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Route introuvable : ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

/**
 * Gestionnaire d'erreurs centralisé.
 * Toutes les erreurs des contrôleurs arrivent ici via next(error).
 * Il doit rester le DERNIER middleware monté et garder ses 4 paramètres,
 * sinon Express ne le reconnaît pas comme gestionnaire d'erreurs.
 */
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  // Erreur de validation Mongoose
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Erreur de validation",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  // JSON malformé envoyé dans le body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "Corps de requête JSON invalide.",
    });
  }

  const status = err.status || 500;

  if (status >= 500) {
    console.error("[erreur serveur]", err);
  }

  res.status(status).json({
    success: false,
    message:
      status >= 500
        ? "Erreur serveur, veuillez réessayer plus tard."
        : err.message,
  });
};
