import { useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: {
          value: 200,
          density: { enable: true, area: 800 },
        },
        color: { value: ["#6c63ff", "#00f5c4"] },
        opacity: { value: .6 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 120,
          color: "#6c63ff",
          opacity: 0.2,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: "bounce" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            links: { opacity: 0.4, color: "#00f5c4" },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="particles-canvas"
      className="absolute inset-0 z-0 w-full h-full"
      options={options}
    />
  );
}