import StateContextProvider from "../../Context/context";
import { LandPage } from "../LandPage";

export const Main = () => {
  return (
    <>
      <StateContextProvider>
        <LandPage></LandPage>
      </StateContextProvider>
    </>
  );
}
