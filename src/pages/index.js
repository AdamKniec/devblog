import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Icon from "../images/background-header.svg"
import HeaderIntro from "../components/styled/HeaderIntro"
// import { HeaderBackground } from "../components/styled/HeaderBackground"
import Background from "../images/Background.svg"
const CustomSvg = styled(Icon)`
  padding: 20px;
  width: 550px;
  height: 450px;
  z-index: 5;
`
export const Section = styled.div`
  padding: 0 40px 0 40px;
  color: #fff;
`
export const WavyBackground = styled(Background)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`
// export const FlexContainer = styled.div`
//   display: flex;
// `
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section className="header-intro">
        <WavyBackground />
        <HeaderIntro />
        <CustomSvg />
      </Section>
    </Layout>
  )
}

export default IndexPage
