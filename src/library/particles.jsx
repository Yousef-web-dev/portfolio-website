import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

export const ParticlesWrapper = ({ children }) => {
  return (
    <ParticlesProvider init={particlesInit}>
      {children}
    </ParticlesProvider>
  );
};