import './scss/main.scss';
import React, { useState } from 'react';
import Table from './components/Table/Table';

// This used to switch between a welcome screen and the main application
// but everybody hates splash screens plus I needed to reuse the
// instructions panel to give the user additional feedback. And obviously
// I couldn't be bothered moving Table into App.
function App() {
  return <Table/>;
}

export default App;
