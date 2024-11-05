import React from 'react'
import { Hourglass } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#2D9431", "#FFF8E1"]}
    />
  );
}

export default Spinner
