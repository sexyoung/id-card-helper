import React from 'react';
import Highlight from 'react-highlight.js';

import './home-page.css';

const HomePage = () => (
  <div className="home-page">
    <div className="hero bg-secondary">
      <h1>id card helper</h1>
      <h2>
        <u>輕量</u>，
        <u>簡單</u> 而且
        <u>方便</u>
        的身份證檢查器
      </h2>
      <div className="text-gray">目前支援：<span className="version" />台灣</div>
    </div>
    <div className="block block-desc bg-secondary">
      <div className="container grid-lg">
        <div className="columns">
          <div className="column col-4 col-xs-12">
            <div className="card text-center">
              <div className="card-header">
                <span className="card-title">絕對輕量</span>
              </div>
              <div className="card-body">
                不到 10KB 的羽量級套件，輕巧而精鍊。
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="card text-center">
              <div className="card-header">
                <span className="card-title">簡單安裝</span>
              </div>
              <div className="card-body">
                  僅需一行指令即可完成安裝
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="card text-center">
              <div className="card-header">
                <span className="card-title">方便易用</span>
              </div>
              <div className="card-body">
                  驗證、產生身份證只需要一行指令。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="block block-install bg-gray">
      <h2 className="title">如何安裝</h2>
    用 terminal 打開專案目錄後，下這個指令：
      <div className="terminal grid-lg">
        <div className="header">
          <div className="r circle" />
          <div className="y circle" />
          <div className="g circle" />
        </div>
        <div className="command text-light">
          <span className="text-gray">&gt;</span> yarn add id-card-helper
        </div>
      </div>
    </div>
    <div className="block block-use code">
      <h2 className="title">如何使用</h2>
      <p>打開編輯器，輸入以下代碼：</p>
      <Highlight language="javascript">
        import IDCardHelper from 'id-card-helper';<br />
        <br />
        const taiwanID = new IDCardHelper('Taiwan');<br />
        <br />
        /* 產生一個隨機的身份證 */<br />
        taiwanID.generate();<br />
        <br />
        /* 產生一個以A為開頭的身份證 */<br />
        taiwanID.generate(&#123; area: 'A' &#125;);<br />
        <br />
        /* 產生一個女性身份證 */<br />
        taiwanID.generate(&#123; gender: 'female' &#125;);<br />
        <br />
        /* 產生一個以A為開頭的女性身份證 */<br />
        taiwanID.generate(&#123; area: 'A', gender: 'female' &#125;);<br />
        <br />
        /* 產生 5 個身份證 */<br />
        taiwanID.generate(&#123; count: 5 &#125;);<br />
        <br />
        /* 驗證身份證 */<br />
        taiwanID.check('A123456789');<br />
      </Highlight>
    </div>
  </div>
);

export default HomePage;
