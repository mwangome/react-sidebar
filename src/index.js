import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Home from './components/Home';
import Topics from './components/Topics';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

const App = () => (
  <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={styles}
    >
      <menu>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/topics">Topics</Link></div>
      </menu>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </div>
    </SplitPane>
  </Router>
);

render(<App />, document.body);
