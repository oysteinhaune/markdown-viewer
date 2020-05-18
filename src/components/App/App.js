import React from 'react';
import './App.css';
import Editor from '../Editor/Editor.js'
import Previewer from '../Previewer/Previewer.js'
import DOMPurify from 'dompurify';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // må unescape for markup funksjonen støtter bare ren tekst.
      input: unescape("%23%20H1%20Title%0A%0A%23%23%20H2%20Title%0A%0A%5Bfreecodecamp%5D%28https%3A//www.freecodecamp.com%29%0A%0Ainline%20%60const%20code%20%3D%20%22hello%20World%22%60%20hello%0A%0A%60%60%60%0Afunction%28%29%20%7B%0A%20%20const%20%3D%20%22A%20code%20block%22%3B%0A%7D%0A%60%60%60%0A%0A1.%20A%20list%20item%0A%0A%3E%20The%20overriding%20design%20goal%20for%20Markdown%27s%0A%0A%21%5BAlt%20text%5D%28http%3A//tiny.cc/cd0soz%29%0A%0A**Bolded%20text**"),
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    const newText = event.target.value
    const sanitizedText = DOMPurify.sanitize(newText);

    this.setState({
      input: sanitizedText
    })
  }

  render() {
    return (
      <div className="App">
        <Editor onChange={this.handleChange} defaultValue={this.state.input}/>
        <Previewer defaultValue={this.state.input}/>
      </div>
    );
  }
}

export default App;
