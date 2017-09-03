import React from 'react';

import IDCardHelper from 'id-card-helper';

import areaList from './area';

const cardHelper = new IDCardHelper('Taiwan');

class MoreGenerater extends React.Component {
  constructor() {
    super();
    this.state = {
      area: '',
      gender: '',
      count: '',
      output: [],
    };
  }

  handleChange = (option) => {
    this.setState(option);
  }

  handleGenerate = () => {
    const { area, gender, count } = this.state;
    this.handleChange({
      'output': cardHelper.generate({ area, gender, count })
    });
  }

  render() {
    const {
      area,
      gender,
      count,
      output,
    } = this.state;
    return (
      <div className="block block-multiple">
        <div className="container grid-lg">
          <h2 className="title">產生多個</h2>
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
              value={gender}
              className="form-select select-lg"
            >
              <option>性別</option>
              <option value="female">女</option>
              <option value="male">男</option>
            </select>
            <select
              onChange={e => this.handleChange({
                count: e.target.value
              })}
              value={count}
              className="form-select select-lg"
            >
              <option value="">數量</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <button
              onClick={this.handleGenerate}
              disabled={!count}
              className="btn btn-primary input-group-btn btn-lg"
            >
              再產生
            </button>
          </div>
          <div className="output bg-gray container grid-xs">
            <ul>
              {output.map(id => <li key={id}>{id}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreGenerater;
