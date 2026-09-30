"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import OrderBoard from "./OrderBoard";

/** Partie droite du Hero : le portrait dans un médaillon cerclé d'or, et le
 *  tableau de commandes qui vient le chevaucher. Composant client parce que
 *  le tableau fait une entrée animée. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[460px] min-w-0 flex-col items-center gap-8 lg:block lg:h-[540px]">
      {/* Grille de points : pure décoration, cachée aux lecteurs d'écran. */}
      <div
        aria-hidden="true"
        className="dots absolute right-0 top-0 hidden h-28 w-28 opacity-60 lg:block"
      />

      {/* Le médaillon reste en laque noire dans les deux thèmes : c'est lui
          qui porte l'or en thème clair. */}
      <div className="relative h-[240px] w-[240px] shrink-0 overflow-hidden rounded-full border border-gold bg-inlay sm:h-[300px] sm:w-[300px] lg:absolute lg:left-0 lg:top-0 lg:h-[330px] lg:w-[330px]">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Illustrated portrait of ${profile.name}`}
            fill
            sizes="(max-width: 640px) 240px, 330px"
            className="object-cover"
            priority
          />
        ) : (
          // Tant que la photo n'existe pas : les initiales.
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-display text-[96px] font-extrabold tracking-tight text-gold"
          >
            {profile.initials}
          </span>
        )}
      </div>

      {/* Le tableau arrive après le titre : d'abord le message, ensuite
          la preuve. */}
      <motion.div
        className="w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-[330px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
      >
        <OrderBoard />
      </motion.div>
    </div>
  );
}
