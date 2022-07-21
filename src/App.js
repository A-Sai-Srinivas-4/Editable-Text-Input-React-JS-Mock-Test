import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    inputText: '',
    toggle: false,
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickToggle = () => {
    this.setState(prevState => ({toggle: !prevState.toggle}))
  }

  onClickEdit = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }))
  }

  render() {
    const {toggle, inputText} = this.state
    console.log(toggle)
    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          {toggle ? (
            <div className="edit-container">
              <p className="para">{inputText}</p>
              <button
                type="button"
                className="button-edit"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          ) : (
            <>
              <input
                type="text"
                className="input-text"
                value={inputText}
                onChange={this.onChangeText}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickToggle}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default App
