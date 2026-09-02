import Contact from "../models/contact.js";

export const sendContactMessage = async (req, res, next) => {
  try {
    // On ne prend que les champs attendus : rien d'autre du body n'entre en base.
    const { name, email, subject, message, website } = req.body;

    // Piège à robots : un humain ne voit jamais ce champ, donc il reste vide.
    // On renvoie un succès factice pour ne pas apprendre au bot qu'il est détecté.
    if (website) {
      return res.status(201).json({
        success: true,
        message: "Message envoyé avec succès !",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
      ip: req.ip,
      userAgent: req.get("user-agent"),
    });

    res.status(201).json({
      success: true,
      message: "Message envoyé avec succès !",
      data: {
        id: newContact._id,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    // Toutes les erreurs partent au gestionnaire centralisé.
    next(error);
  }
};
