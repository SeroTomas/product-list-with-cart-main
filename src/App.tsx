import Desserts from "./desserts/Desserts";
import "./index.css";


const App = () => {

  return (
    <div className="w-full min-h-screen flex justify-center">
      <main className="flex flex-col items-center max-w-[375px] xl:max-w-[1440px]">
        <Desserts />

      </main>
    </div>
  )
}
export default App