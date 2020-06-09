import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
<<<<<<< HEAD

    };
  }


  handleTweet= event => {
   this.setState({
     tweet: event.target.value
   })

=======
      maxTweet = props.maxChars
    };
  }

  handleTweet= event => {
    this.setState({
      tweet: this.state.tweet.value
    })
>>>>>>> 6b9cdc481fa37b9c1e98ca805c38afb6b03348c2
  }


  render() {
    console.log("State", this.state )
    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <input type="text" name="message" id="message" value= {this.state.tweet} onChange = {event => this.handleTweet(event)}/>
        <h4> Words left
        {this.props.maxChars - this.state.tweet.length}
        </h4>

=======
        <input type="text" name="message" id="message" value= this.state.tweet />
>>>>>>> 6b9cdc481fa37b9c1e98ca805c38afb6b03348c2
      </div>
    );
  }
}
