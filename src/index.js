import React from 'react';
import ReactDOM from 'react-dom';
import IPFS from 'ipfs';
import App from './App';

const node = new IPFS()

node.on('ready', async () => {
  try {
    const version = await node.version()
    console.log('Version:', version.version)
  } catch (error) {
    console.error('Error', error)
  }
})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

// module.hot.accept();