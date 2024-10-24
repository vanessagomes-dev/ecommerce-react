import React from 'react';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {text}
    </button>
  );
}

export default Button;
