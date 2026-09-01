import React, { useMemo } from "react";

/**
 * BroadcastHero
 * A text-free hero section on a white background that visualizes
 * a device broadcasting wireless signals to an asymmetric field of
 * receiver nodes. Built with React + Tailwind CSS (layout/utility)
 * and a small set of custom keyframes (motion only Tailwind can't express).
 */

// Receiver nodes placed at slightly irregular angles/radii so the
// broadcast field reads as a real, organic network rather than a
// perfect geometric ring.
const NODES = [
  { angle: 52, radius: 50, size: 8 },
  { angle: 95, radius: 34, size: 12 },
  { angle: 134, radius: 40, size: 9 },
  { angle: 178, radius: 33, size: 10 },
  { angle: 225, radius: 45, size: 8 },
  { angle: 251, radius: 60, size: 11 },
  { angle: 320, radius: 60, size: 9 },
];

const RING_DURATION = 3.6; // seconds — full expand-and-fade cycle
const RING_COUNT = 4;

export default function Animatebackground() {
  const nodes = useMemo(
    () =>
      NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = 50 + n.radius * Math.cos(rad);
        const y = 50 + n.radius * Math.sin(rad);
        // Nodes farther from the center "receive" the wave later,
        // keeping the pulse in sync with the ring that reaches them.
        const delay = (n.radius / 45) * RING_DURATION;
        return { ...n, x, y, delay, key: i };
      }),
    [],
  );

  return (
    <section className="absolute -z-10 bottom-0 opacity-50 2xl:bottom-auto flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      {/* faint technical grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 85%)",
        }}
      />

      {/* broadcast field */}
      <div
        className="relative aspect-square"
        style={{ width: "min(78vmin, 640px)" }}
      >
        {/* connecting lines: static network topology */}
        {nodes.map((n) => (
          <div
            key={`line-${n.key}`}
            className="absolute left-1/2 top-1/2 h-px origin-left"
            style={{
              width: `${n.radius}%`,
              transform: `rotate(${n.angle}deg)`,
              background:
                "linear-gradient(to right, rgba(15,23,42,0.14), rgba(15,23,42,0))",
            }}
          />
        ))}

        {/* expanding broadcast rings */}
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <div
            key={`ring-${i}`}
            className="broadcast-ring absolute left-1/2 top-1/2 rounded-full border border-[#5687af]"
            style={{
              animationDelay: `${(i * RING_DURATION) / RING_COUNT}s`,
            }}
          />
        ))}

        {/* receiver nodes */}
        {nodes.map((n) => (
          <div
            key={`node-${n.key}`}
            className="broadcast-node absolute rounded-full bg-slate-300"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: `${n.size}px`,
              height: `${n.size}px`,
              animationDelay: `${n.delay}s`,
            }}
          />
        ))}

        {/* central transmitter */}
      </div>

      <style>{`
        @keyframes ring-pulse {
          0% {
            width: 10%;
            height: 10%;
            opacity: 0.55;
            border-width: 2px;
          }
          70% {
            opacity: 0.16;
          }
          100% {
            width: 150%;
            height: 150%;
            opacity: 0;
            border-width: 0.5px;
          }
        }

        @keyframes node-receive {
          0%, 84%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
          90% {
            transform: translate(-50%, -50%) scale(1.7);
            background-color: #5687af;
            box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.14);
          }
          96% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes hub-pulse {
          0%, 6%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          3% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        .broadcast-ring {
          animation: ring-pulse ${RING_DURATION}s cubic-bezier(0.2, 0.6, 0.35, 1) infinite;
          transform: translate(-50%, -50%);
        }

        .broadcast-node {
          animation: node-receive ${RING_DURATION}s ease-in-out infinite;
          transform: translate(-50%, -50%);
        }

        .broadcast-hub {
          animation: hub-pulse ${RING_DURATION}s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .broadcast-ring,
          .broadcast-node,
          .broadcast-hub {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
