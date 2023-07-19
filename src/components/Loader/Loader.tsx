import { Discuss } from "react-loader-spinner";
import styled from "@emotion/styled";

const Loader = () => {
    return (
        <LoaderWrapper>
            <Discuss visible height="80" width="80" colors={["lightblue", "white"]}/>
        </LoaderWrapper>
    );
};

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;