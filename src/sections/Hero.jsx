import { Canvas, useFrame } from "@react-three/fiber"
import HeroText from "../components/HeroText"
import ParallaxBg from "../components/ParallaxBg"
import { Astronaut } from "../components/Astronaut"
import { OrbitControls, Float } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import * as easing from "maath/easing"
import { Suspense } from "react"
import Loader from "../components/Loader"


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center md:items-start min-h-screen overflow-hidden c-space" id='home'>
      <HeroText />
      <ParallaxBg />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* Lights */}
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <Float>
            <Astronaut
              scale={isMobile && 0.23 }
              position={isMobile && [0, -1.5, 0] }
            />
          </Float>

          <Rig />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0); // Always look at astronaut
  });
  return null;
}

export default Hero;