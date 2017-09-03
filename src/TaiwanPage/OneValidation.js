import React from 'react';

import IDCardHelper from 'id-card-helper';

import error from './error';

const cardHelper = new IDCardHelper('Taiwan');

class OneValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      output: '',
    };
  }

  handleChange = (option) => {
    this.setState(option);
  }

  handleGenerate = (e) => {
    e.preventDefault();
    let html = '';
    const result = cardHelper.check(this.id.value);
    if (error[result]) {
      html = `<span class='text-error'>${error[result]}</span>`;
    } else {
      html = '<span class=\'text-success\'>有效的身份證</span>';
    }
    this.handleChange({
      output: html
    });
  }

  render() {
    const { id, output } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleGenerate}
          className="input-group container grid-xs"
        >
          <input
            value={id}
            type="text"
            maxLength={10}
            ref={ref => this.id = ref}
            className="form-input input-lg"
            onChange={e => this.handleChange({
              id: e.target.value
            })}
          />
          <button className="btn btn-primary input-group-btn btn-lg">驗證</button>
        </form>
        <div
          className="output"
          dangerouslySetInnerHTML={{
            __html: output
          }}
        />
      </div>
    );
  }
}

export default OneValidation;
