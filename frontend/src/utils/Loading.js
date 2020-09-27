import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loading() {
  return (
    <div style={LoaderStyle}>
      <FontAwesomeIcon icon="spinner" spin color="#000000" size="2x" />
    </div>
  );
}

const LoaderStyle = {
  width: '100%',
  padding: '10px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
export default Loading;
