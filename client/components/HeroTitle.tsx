"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

/** Titre du Hero : les mots s'allument l'un après l'autre. Isolé dans un
 *  composant client pour que Hero reste un composant serveur. */

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

/* Le départ est à 25 % d'opacité, pas à 0 : le titre est donc peint dès le
   premier affichage. À 0, le navigateur attendrait la fin de l'animation
   pour compter le titre comme affiché, et la mesure LCP en souffrirait. */
const word: Variants = {
  hidden: { opacity: 0.25, y: "0.3em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export interface TitleLine {
  text: string;
  className?: string;
}

interface HeroTitleProps {
  lines: TitleLine[];
  /** Mot à mettre en couleur d'accent, sans sa ponctuation ("Mehdi"). */
  highlight?: string;
  className?: string;
}

/** Retire la ponctuation collée au mot, pour comparer "Mehdi." à "Mehdi". */
const bare = (value: string) => value.replace(/[.,!?]/g, "");

export default function HeroTitle({
  lines,
  highlight,
  className,
}: HeroTitleProps) {
  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line) => {
        const words = line.text.split(" ");

        return (
          <span key={line.text} className={`block ${line.className ?? ""}`}>
            {words.map((w, i) => (
              <Fragment key={i}>
                <motion.span
                  variants={word}
                  className={`inline-block ${
                    bare(w) === highlight ? "text-accent" : ""
                  }`}
                >
                  {w}
                </motion.span>
                {/* L'espace reste hors du mot : sans lui, le titre ne
                    pourrait plus passer à la ligne. */}
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </span>
        );
      })}
    </motion.h1>
  );
}
