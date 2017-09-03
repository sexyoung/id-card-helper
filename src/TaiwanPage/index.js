import React from 'react';

import OneGenerater from './OneGenerater';
import OneValidation from './OneValidation';
import MoreGenerater from './MoreGenerater';

import './taiwan-page.css';


class TaiwanPage extends React.Component {
  constructor() {
    super();
    this.state = {
      section: 'generate',
    };
  }

  handleChangeSection = (section) => {
    this.setState({ section });
  }

  render() {
    const { section } = this.state;
    return (
      <div className="taiwan-page">
        <div className="hero bg-secondary">
          <div className="container grid-lg">
            <ul className="tab tab-block container grid-xs">
              <li className={`tab-item ${section === 'generate' && 'active'}`}>
                <a
                  href="https://"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleChangeSection('generate');
                  }}
                >
                  產生身份證
                </a>
              </li>
              <li className={`tab-item ${section === 'validation' && 'active'}`}>
                <a
                  href="https://"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleChangeSection('validation');
                  }}
                >
                  檢查身份證
                </a>
              </li>
            </ul>
            { this.state.section === 'generate' && <OneGenerater /> }
            { this.state.section === 'validation' && <OneValidation /> }
          </div>
        </div>
        { this.state.section === 'generate' && <MoreGenerater /> }
      </div>
    );
  }
}

export default TaiwanPage;
