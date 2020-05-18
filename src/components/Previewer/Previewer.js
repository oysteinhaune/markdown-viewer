import React from 'react';
import './Previewer.css';
const marked = require('marked');

class Previewer extends React.Component {

  getRawMarkup() {
    return { __html: marked(this.props.defaultValue) };
  }

  render() {
    return (
      <div className="Previewer">
        <p>Previewer</p>
          <div
            className="content"
            id="preview"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          >
        </div>
      </div>
    );
  }
}

export default Previewer;
