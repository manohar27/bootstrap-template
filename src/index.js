import React from 'react';
import {render} from 'react-dom';
import Page from './components/page';
import data from './mock-content';
//import getContent from '../fetch';
//let props = getContent('http://localhost:3000/mock-content.json');
//console.log(props);
const App = (props) =>(
    <Page data={data}/>
    );

export default App;

if(typeof document != 'undefined') {
  render(<App />, document.getElementById('app'));
}
