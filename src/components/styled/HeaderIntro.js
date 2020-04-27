import React from "react"
import styled from "styled-components"
import JsIcon from "../../images/js.svg"
import HtmlIcon from "../../images/html.svg"
import CssIcon from "../../images/css.svg"
import ReactSvg from "../../images/reactIcon.svg"

const HeaderIntro = () => {
  const WelcomeHeader = styled.h1`
    position: relative;
    z-index: 2;
    font-size: 3rem;
    &::before {
      content: "";
      width: 400px;
      height: 50px;
      background-color: #292727;
      position: absolute;
      z-index: -1;
      top: -10px;
      left: -20px;
    }
  `
  const IntroText = styled.p``
  return (
    <div className="intro-container">
      <WelcomeHeader>Witaj na blogu!</WelcomeHeader>
      <IntroText>
        Wpisy będą dotyczyć głównie tematów z zakresu{" "}
        <span className="intro-text-decorator">front-end</span> developmentu. Na
        pewno mozesz się spodziewać:
        <div className="tech-icons-container">
          <JsIcon />
          <HtmlIcon />
          <CssIcon />
          <ReactSvg />
        </div>
        <span className="intro-text-decorator bottom">
          Obyś znalazł coś dla siebie 💻
        </span>
      </IntroText>
    </div>
  )
}

export default HeaderIntro
