import StateContextProvider from "../context";
import { LandPage } from "./Landpage/LandPage";

export default function Main() {
  return (
    <>
      <StateContextProvider>
        <LandPage></LandPage>
      </StateContextProvider>
    </>
  );
}
