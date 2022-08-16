import StateContextProvider from "./components/context";
import { LandPage } from "./components/Movies/Landpage/LandPage";




export default function App() {

  return (
    <>
    <StateContextProvider>
      <LandPage></LandPage>
    </StateContextProvider>
   </>
  );
}
