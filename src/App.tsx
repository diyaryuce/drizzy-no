import Navbar from "./components/navbar"
import Mainsite from "./components/mainsite"

export default function App() {
  return(<>
    <div className="min-h-[125rem]">
      <Navbar />
      <Mainsite />
    </div>
  </>)
}

/**
 * <h1 className="flex text-[clamp(1.425rem,4vw,2.5rem)] text-white font-bold shrink-0 ">
 *  dev branch test
 * </h1>
 */