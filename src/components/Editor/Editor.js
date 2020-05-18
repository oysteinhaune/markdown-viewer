import React from 'react';
import './Editor.css';

class Editor extends React.Component {
  render() {

    return (
      <div className="Editor">
        <p>Editor</p>
        <textarea defaultValue={this.props.defaultValue} onChange={this.props.onChange} id="editor" rows="20" cols="50"></textarea>
      </div>
    );
  }
}

export default Editor;
