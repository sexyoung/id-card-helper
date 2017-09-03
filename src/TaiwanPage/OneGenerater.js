import React from 'react';

import IDCardHelper from 'id-card-helper';

import areaList from './area';

const cardHelper = new IDCardHelper('Taiwan');

class OneGenerater extends React.Component {
  constructor() {
    super();
    this.state = {
      area: '',
      gender: '',
      output: '',
    };
  }

  handleChange = (option) => {
    this.setState(option);
  }

  handleGenerate = () => {
    const { area, gender } = this.state;
    this.handleChange({
      'output': cardHelper.generate({ area, gender })
    });
  }

  render() {
    const {
      area,
      gender,
      output,
    } = this.state;
    return (
      <div className="input-group container grid-xs">
        <select
          onChange={e => this.handleChange({
            area: e.target.value
          })}
          className="form-select select-lg"
          value={area}
        >
          <option>地區</option>
          {Object.keys(areaList).map(optgroup => (
            <optgroup key={optgroup} label={optgroup}>
              {Object.keys(areaList[optgroup]).map(code =>
                <option key={`${optgroup}-${code}`} value={code}>{code} - {areaList[optgroup][code]}</option>
              )}
            </optgroup>
          ))}
        </select>
        <select
          onChange={e => this.handleChange({
            gender: e.target.value
          })}
          className="form-select select-lg"
          value={gender}
        >
          <option>性別</option>
          <option value="female">女</option>
          <option value="male">男</option>
        </select>
        <div type="text" className="form-input input-lg">
          {output}
        </div>
        <button
          onClick={this.handleGenerate}
          className="btn btn-primary input-group-btn btn-lg"
        >再產生</button>
      </div>
    );
  }
}

export default OneGenerater;
