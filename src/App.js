import React, { Component } from 'react';

class Question extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedOption: ''
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='answerOption'
                value='jackieBrown'
                checked={this.state.selectedOption === 'jackieBrown'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              Jackie Brown
            </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='answerOption'
                value='killBill'
                checked={this.state.selectedOption === 'killBill'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              Kill Bill
            </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='answerOption'
                value='hatefulEight'
                checked={this.state.selectedOption === 'hatefulEight'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              Hateful Eight
            </label>
          </div>

          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='answerOption'
                value='pulpFiction'
                checked={this.state.selectedOption === 'pulpFiction'}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              Pulp Fiction
            </label>
          </div>
        </form>
      </div>
    );
  }
}

// class Answer extends Component {
//   render() {
//     return (
//       <div>
//         <p>This is from the Answer Component</p>
//       </div>
//     )
//   }
// }


export default Question;
