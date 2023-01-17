import React from 'react';
import Alert from 'react-bootstrap/Alert'


class Error extends React.Component {
  render() {
    return (
      <div>
        {this.props.isError === true &&
          <div className='error-message'>
            <img alt="{this.props.errorMessage}" src={`https://httpcats.com/${this.props.errorNumber}.jpg`} />
            <Alert className="error-alert" variant="danger">
              {this.props.errorMessage}
            </Alert></div>
        }
      </div>

    )
  }
}

export default Error;

