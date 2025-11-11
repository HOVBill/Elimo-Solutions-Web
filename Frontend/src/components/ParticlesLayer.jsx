import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesLayer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => setReady(true));
  }, []);

  const options = {
    background: { color: "transparent" },
    particles: {
      number: { value: 60 },
      links: { enable: true, opacity: 0.4 },
      move: { enable: true, speed: 1 },
      size: { value: 3 },
      color: "#00bcd4"
    }
  };

  return ready ? <Particles id="tsparticles" options={options} /> : null;
}
