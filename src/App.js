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

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault(); 
    console.log('You have submitted:', this.state.selectedOption);
  }

  
  // handleFormSubmit = (this.state.selectedOption) => {
  //   this.state.selectedOption === 'killBill' ? 'correct':'incorrect'}

  render() {
    return (
      <div>
        <div>
          <img className='imageStill' src='https://i2.wp.com/film-grab.com/wp-content/uploads/2011/02/223.png' alt='Pulp Fiction'></img>
        </div>
          <form onSubmit={this.handleFormSubmit}> 
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
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
      </div>
    );
  }
}




export default Question;
