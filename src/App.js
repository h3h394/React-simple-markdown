/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown/with-html";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className="App" css={styles}>
      <h1>Markdown</h1>
      <div className="markdownContainer">
        <textarea onChange={(e) => setValue(e.target.value)}></textarea>
        <ReactMarkdown className="output" source={value} escapeHtml={false} />
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 18px;
  }
  .markdownContainer {
    width: 100%;
    max-width: 1400px;
    display: flex;
    a{
      color: red;
    }
    textarea,
    .output {
      width: 100%;
      max-width: 50%;
      padding: 20px;
    }
    textarea {
      width: 100%;
      resize: none;
      border: none;
      outline: none;
    }
    .output {
      background: #2d4059;
      height: 800px;
      text-align: center;
    }
  }
  @media (max-width: 980px) {
    .markdownContainer {
      flex-direction: column;
      .output,
      textarea {
        max-width: 100%;
        height: 400px;
      }
    }
  }
  @media (max-width: 1440px) {
    .markdownContainer {
      max-width: 90%;
    }
  }
`;

export default App;
