import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loading() {
  return (
    <div style={LoaderStyle}>
      <FontAwesomeIcon icon="spinner" spin color="#ffffff" />
    </div>
  );
}

const LoaderStyle = {
  width: '100%',
  padding: '10px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
};
export default Loading;
