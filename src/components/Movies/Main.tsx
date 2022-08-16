import StateContextProvider from "../context";
import { LandPage } from "./LandPage/LandPage";

export const Main = () => {
  return (
    <>
      <StateContextProvider>
        <LandPage></LandPage>
      </StateContextProvider>
    </>
  );
}
