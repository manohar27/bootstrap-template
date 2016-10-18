import React from 'react';
import {render} from 'react-dom';
import Page from './components/page';
class App extends React.Component {
  render () {
    return (
    <Page />
    );
  }
}

export default App;
if(typeof document != 'undefined')
{
  render(<App />, document.getElementById('app'));
}
