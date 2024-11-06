import React from 'react'
import { Link } from 'react-router-dom';

const NavigateLink = ({link}) => {
  return (
    <Link to={link}>
      <img src="/right-arrow.png" alt="right-arrow" />
    </Link>
  );
}

export default NavigateLink