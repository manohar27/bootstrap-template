import React from 'react';
import {render} from 'react-dom';
import Page from './components/page';
import config from './mock-content';
class App extends React.Component {
  render () {
    return (
    <Page data={config}/>
    );
  }
}

export default App;

if(typeof document != 'undefined') {
  render(<App />, document.getElementById('app'));
}
