import mongoose from "mongoose";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom est requis."],
      trim: true,
      minlength: [2, "Le nom doit faire au moins 2 caractères."],
      maxlength: [100, "Le nom ne peut pas dépasser 100 caractères."],
    },
    email: {
      type: String,
      required: [true, "L'email est requis."],
      trim: true,
      lowercase: true,
      maxlength: [150, "L'email ne peut pas dépasser 150 caractères."],
      match: [EMAIL_REGEX, "Email invalide."],
    },
    subject: {
      type: String,
      required: [true, "Le sujet est requis."],
      trim: true,
      minlength: [3, "Le sujet doit faire au moins 3 caractères."],
      maxlength: [150, "Le sujet ne peut pas dépasser 150 caractères."],
    },
    message: {
      type: String,
      required: [true, "Le message est requis."],
      trim: true,
      minlength: [20, "Le message doit faire au moins 20 caractères."],
      maxlength: [5000, "Le message ne peut pas dépasser 5000 caractères."],
    },
    // Métadonnées utiles pour tracer un abus, jamais exposées au client.
    ip: { type: String, select: false },
    userAgent: { type: String, select: false },
  },
  { timestamps: true },
);

// Les messages les plus récents d'abord.
contactSchema.index({ createdAt: -1 });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
