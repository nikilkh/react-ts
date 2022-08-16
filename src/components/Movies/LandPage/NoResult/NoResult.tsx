import noResult from "../../../SVGs/noResult.svg";
import { ErrorHeadingStyle, NoResultStyle } from "./NoResult.styled";

export default function NoResult() {
  return (
    <>
      <NoResultStyle>
        <ErrorHeadingStyle>
          Sorry,there is no result for keyword you searched
        </ErrorHeadingStyle>
        <img src={noResult} alt="Sorry No Results"></img>
      </NoResultStyle>
    </>
  );
}
