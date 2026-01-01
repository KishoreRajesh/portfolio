import { Html, useProgress } from "@react-three/drei"


const Loader = () => {
    const { progress } = useProgress();
  return (
    <Html center className="font-normal text-center text-8xl">{progress.toFixed(2)}% Loaded</Html>
  )
}

export default Loader