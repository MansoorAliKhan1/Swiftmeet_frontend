import React from 'react';

const Loader = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="loader"></div>
        <div className="loading-text" style={{fontFamily:'monospace'}}>loading</div>
      </div>
    </div>
  );
};

export default Loader;
