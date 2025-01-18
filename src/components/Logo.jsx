import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <img
      src="https://img.icons8.com/?size=100&id=18911&format=png&color=000000"
      alt="Logo"
      style={{ width }}
      className="block"
    />
  );
}

export default Logo;
