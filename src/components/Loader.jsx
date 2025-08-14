import { Html, useProgress } from "@react-three/drei"


const Loader = () => {
    const {Progress} = useProgress();
  return (
    <Html center className="font-normal text-center text-8xl">{Progress}% Loaded</Html>
  )
}

export default Loader