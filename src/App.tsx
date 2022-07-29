import StateContextProvider from "./components/context";
import { LandPage } from "./components/LandPage";




export default function App() {

  return (
    <>
    <StateContextProvider>
      <LandPage></LandPage>
    </StateContextProvider>
   </>
  );
}
