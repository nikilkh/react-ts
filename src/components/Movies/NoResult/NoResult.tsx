import { ErrorHeadingStyle, NoResultStyle } from "./NoResult.styled";
import noResult from "../../SVGs/noResult.svg";


export const NoResult = () => {
  return (
    <>
      <NoResultStyle>
        <ErrorHeadingStyle>
          Sorry,there is no result for keyword you searched
        </ErrorHeadingStyle>
        {/* <NoResult/> */}
        <img src={noResult} alt="Sorry No Results"></img>
      </NoResultStyle>
    </>
  );
}
