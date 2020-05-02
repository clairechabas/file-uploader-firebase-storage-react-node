import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Upload a file to Firebase Cloud Storage</h1>
      </header>
      <main className='uploader'>
        <form className='uploader-form'>
          <label className='uploader-button'>
            <i className='icon-upload'></i>
            <input type='file' />
            <p>No file selected yet</p>
          </label>
        </form>
      </main>
    </div>
  );
}

export default App;
