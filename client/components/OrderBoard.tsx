"use client";

import { useEffect, useState } from "react";

/** Reproduit l'écran cuisine de Niwa Food : les commandes arrivent, avancent
 *  d'un statut, puis sortent de l'écran. Même vocabulaire, mêmes états que
 *  l'application réelle — c'est la démonstration, pas une décoration. */

const STATUSES = ["Reçue", "En préparation", "Prête"] as const;

interface Order {
  id: number;
  channel: string;
  detail: string;
  items: number;
  status: 0 | 1 | 2;
}

const CHANNELS = [
  { channel: "Sur place", detail: "Table 4" },
  { channel: "À emporter", detail: "Comptoir" },
  { channel: "Livraison", detail: "Garidi 2" },
  { channel: "Sur place", detail: "Table 11" },
];

const START: Order[] = [
  { id: 128, channel: "Sur place", detail: "Table 4", items: 3, status: 2 },
  { id: 129, channel: "Livraison", detail: "Garidi 2", items: 5, status: 1 },
  { id: 130, channel: "À emporter", detail: "Comptoir", items: 2, status: 0 },
];

export default function OrderBoard() {
  const [orders, setOrders] = useState<Order[]>(START);
  const [nextId, setNextId] = useState(131);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setOrders((current) => {
        const pending = current.findIndex((order) => order.status < 2);

        // Plus rien à avancer : la commande la plus ancienne est servie
        // et une nouvelle entre en bas de pile.
        if (pending === -1) {
          const slot = CHANNELS[nextId % CHANNELS.length];
          setNextId((id) => id + 1);
          return [
            ...current.slice(1),
            {
              id: nextId,
              channel: slot.channel,
              detail: slot.detail,
              items: 2 + (nextId % 4),
              status: 0,
            },
          ];
        }

        return current.map((order, i) =>
          i === pending
            ? { ...order, status: (order.status + 1) as 0 | 1 | 2 }
            : order,
        );
      });
    }, 2400);

    return () => clearInterval(timer);
  }, [nextId]);

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="dot dot-live" />
          <span className="text-[13px] font-semibold">
            Tableau de suivi — temps réel
          </span>
        </div>
        <span className="font-mono text-[11px] text-faint">
          connexion temps réel
        </span>
      </div>

      <ul
        // Les changements sont annoncés poliment aux lecteurs d'écran plutôt
        // que d'interrompre la lecture de la page.
        aria-live="polite"
        aria-label="Commandes en cours, mise à jour automatique"
        className="divide-y divide-line"
      >
        {orders.map((order) => (
          <li
            key={order.id}
            className="flex items-center gap-3 px-4 py-3.5 sm:gap-4"
          >
            <span className="w-14 shrink-0 font-mono text-[15px] font-medium tabular-nums">
              #{order.id}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[15px] font-semibold">
                {order.channel}
              </span>
              <span className="block truncate text-[13px] text-faint">
                {order.detail} — {order.items} articles
              </span>
            </span>
            <span
              className={`shrink-0 rounded-md border px-2.5 py-1 text-[12px] font-semibold transition-colors duration-200 ${
                order.status === 2
                  ? "border-ok/40 text-ok"
                  : order.status === 1
                    ? "border-accent/40 text-accent"
                    : "border-line text-faint"
              }`}
            >
              {STATUSES[order.status]}
            </span>
          </li>
        ))}
      </ul>

      <p className="border-t border-line bg-raised px-4 py-2.5 font-mono text-[11px] leading-relaxed text-faint">
        Socket.io — 3 écrans synchronisés en direct
      </p>
    </div>
  );
}
