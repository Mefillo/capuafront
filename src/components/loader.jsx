import { css } from "@emotion/core";
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
  display: block;
  margin: auto;
  border-color: purple;
  top:50%;
  left:50%;
`;


const Loader = (props) => {
    console.log(props)
    return(
        <div className='center'>          
        <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={props.loaded}
        />
      </div>
      </div>);
}

export default Loader