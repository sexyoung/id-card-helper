import React from 'react';
import IDCardHelper from 'id-card-helper';

import './taiwan-page.css';

class TaiwanPage extends React.Component {
  render() {
    return (
      <div className="taiwan-page">
        <div className="hero bg-secondary">
          <div className="container grid-lg">
            <ul className="tab tab-block container grid-xs">
              <li className="tab-item active">
                <a href="#">產生身份證</a>
              </li>
              <li className="tab-item">
                <a href="#">檢查身份證</a>
              </li>
            </ul>
            <div className="input-group container grid-xs">
              <select className="form-select select-lg">
                <option>地區</option>
                <optgroup label="北部">
                  <option value="A">A - 臺北市</option>
                  <option value="F">F - 新北市</option>
                  <option value="C">C - 基隆市</option>
                  <option value="H">H - 桃園縣</option>
                  <option value="O">O - 新竹市</option>
                  <option value="J">J - 新竹縣</option>
                  <option value="G">G - 宜蘭縣</option>
                </optgroup>
                <optgroup label="中部">
                  <option value="K">K -苗栗縣</option>
                  <option value="B">B -臺中市</option>
                  <option value="N">N -彰化縣</option>
                  <option value="M">M -南投縣</option>
                  <option value="P">P -雲林縣</option>
                </optgroup>
                <optgroup label="南部">
                  <option value="I">I - 嘉義市</option>
                  <option value="Q">Q - 嘉義縣</option>
                  <option value="D">D - 臺南市</option>
                  <option value="R">R - 臺南縣</option>
                  <option value="E">E - 高雄市</option>
                  <option value="S">S - 高雄縣</option>
                  <option value="T">T - 屏東縣</option>

                </optgroup>
                <optgroup label="東部">
                  <option value="G">G - 宜蘭縣</option>
                  <option value="U">U - 花蓮縣</option>
                  <option value="V">V - 臺東縣</option>
                </optgroup>
                <optgroup label="外島">
                  <option value="X">X - 澎湖縣</option>
                  <option value="W">W - 金門縣</option>
                  <option value="Z">Z - 連江縣</option>
                </optgroup>
              </select>
              <select className="form-select select-lg">
                <option>性別</option>
                <option>女</option>
                <option>男</option>
              </select>
              <div type="text" className="form-input input-lg">
                A123456789
              </div>
              <button className="btn btn-primary input-group-btn btn-lg">再產生</button>
            </div>
          </div>
        </div>
        <div className="block block-multiple">
          <div className="container grid-lg">
            <h2 className="title">產生多個</h2>
            <div className="input-group container grid-xs">
              <select className="form-select select-lg">
                <option>地區</option>
                <optgroup label="北部">
                  <option value="A">A - 臺北市</option>
                  <option value="F">F - 新北市</option>
                  <option value="C">C - 基隆市</option>
                  <option value="H">H - 桃園縣</option>
                  <option value="O">O - 新竹市</option>
                  <option value="J">J - 新竹縣</option>
                  <option value="G">G - 宜蘭縣</option>
                </optgroup>
                <optgroup label="中部">
                  <option value="K">K -苗栗縣</option>
                  <option value="B">B -臺中市</option>
                  <option value="N">N -彰化縣</option>
                  <option value="M">M -南投縣</option>
                  <option value="P">P -雲林縣</option>
                </optgroup>
                <optgroup label="南部">
                  <option value="I">I - 嘉義市</option>
                  <option value="Q">Q - 嘉義縣</option>
                  <option value="D">D - 臺南市</option>
                  <option value="R">R - 臺南縣</option>
                  <option value="E">E - 高雄市</option>
                  <option value="S">S - 高雄縣</option>
                  <option value="T">T - 屏東縣</option>

                </optgroup>
                <optgroup label="東部">
                  <option value="G">G - 宜蘭縣</option>
                  <option value="U">U - 花蓮縣</option>
                  <option value="V">V - 臺東縣</option>
                </optgroup>
                <optgroup label="外島">
                  <option value="X">X - 澎湖縣</option>
                  <option value="W">W - 金門縣</option>
                  <option value="Z">Z - 連江縣</option>
                </optgroup>
              </select>
              <select className="form-select select-lg">
                <option>性別</option>
                <option>女</option>
                <option>男</option>
              </select>
              <select className="form-select select-lg">
                <option>數量</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <button className="btn btn-primary input-group-btn btn-lg" disabled>再產生</button>
            </div>
            <div className="output bg-gray container grid-xs" />
          </div>
        </div>
      </div>
    );
  }
}

export default TaiwanPage;
