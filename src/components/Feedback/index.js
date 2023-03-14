// Write your React code here.
import {Component} from 'react'

class Feedback extends Component {
  state = {
    clicked: false,
  }

  feedback = () => {
    const {clicked} = this.state
    this.setState({clicked: !clicked})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {clicked} = this.state
    return (
      <div>
        {!clicked ? (
          <div className="satisfactory-container">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul>
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <button type="button" onClick={this.feedback}>
                    <img src={eachEmoji.imageUrl} alt={eachEmoji.name} />
                  </button>
                  <p>{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h2>Thank You!</h2>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
