import React, { useState } from 'react';
import { Cutout, Window, WindowContent, WindowHeader, Tabs, Tab, TabBody, Button } from 'react95';
import styled from 'styled-components';
import AppBar from '../common/AppBar';
import IntroTab from './components/IntroTab';
import GetInTouch from './components/GetInTouch';
import OpenSourceIC from './components/OpenSourceIC';
import TradingView from './components/TradingView';
import mycomp from '../../img/win95_mycomputer.png';

const StyledWindow = styled(Window)`
  margin: 5vh;
  z-index: 2;
`;

const StyledHeader = styled(WindowHeader)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

const XButton = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;
`;

const MyCompLink = styled.a`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  width: 80px;
  color: white;
  text-align: center;
  align-items: center;
  cursor: pointer;
  line-height: 1.2;
  font-weight: 300;
  z-index: 1;
`;

const MyCompImg = styled.img`
  width: 60px;
  height: 60px;
`;

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlanShown, setIsPlanShown] = useState(true);
  const [isTradingShown, setIsTradingShown] = useState(true);
  const [linkClicked, setLinkClicked] = useState(false);
  const handleChange = (value) => {
    setActiveTab(value);
  };
  const handlePlanB = (value) => {
    setIsPlanShown(!isPlanShown);
  };
  const handleLinkClicked = () => {
    if (!isPlanShown) {
      if (linkClicked) {
        setLinkClicked(false);
        setIsPlanShown(true);
      } else {
        setLinkClicked(true);
      }
    }
  };
  const handleTradingView = () => {
    setIsTradingShown(!isTradingShown);
  };
  return (
    <Wrapper>
      {isPlanShown && (
        <StyledWindow>
          <StyledHeader>
            {' '}
            ₿ planB.exe{' '}
            <XButton size={'sm'} square onClick={handlePlanB}>
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
            </XButton>
          </StyledHeader>
          <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
              <Tab value={0}>Intro</Tab>
              <Tab value={1}>Open Source IC</Tab>
              <Tab value={2}>Get In Touch</Tab>
            </Tabs>
            {activeTab === 0 && <IntroTab />}
            {activeTab === 1 && <OpenSourceIC />}
            {activeTab === 2 && <GetInTouch />}
          </WindowContent>
        </StyledWindow>
      )}
      {isTradingShown && <TradingView handleTradingView={handleTradingView} />}
      <MyCompLink onClick={handleLinkClicked}>
        <MyCompImg src={mycomp} />
        Permian's PlanB
      </MyCompLink>
    </Wrapper>
  );
}
