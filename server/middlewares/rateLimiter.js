import rateLimit from "express-rate-limit";

/**
 * Limite les envois du formulaire de contact.
 * 5 messages par IP toutes les 15 minutes : largement suffisant pour un
 * visiteur légitime, pénible pour un script de spam.
 */
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Trop de messages envoyés depuis cette adresse. Réessayez dans quelques minutes.",
  },
});

/**
 * Garde-fou global, plus permissif, sur l'ensemble de l'API.
 */
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
