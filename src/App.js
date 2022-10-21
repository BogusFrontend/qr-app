import React, { useState } from 'react';
import QRcode from 'react-qr-code';
import './index.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <h1 className="container text-center mx-auto w-2/4">Содержимое QR-кода</h1>
      <input
        type="text"
        placeholder="Введите ссылку для генерации QR-кода"
        className="border-gray-300 ml-35 w-full h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <QRcode className="mx-auto mt-20" value={inputValue} />
    </div>
  );
}

export default App;
