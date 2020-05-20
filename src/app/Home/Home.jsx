import React, { useState } from 'react';
import { Cutout, Window, WindowContent, WindowHeader, Tabs, Tab, TabBody, Button } from 'react95';
import styled from 'styled-components';
import AppBar from '../common/AppBar';
import banner from '../../img/permian_banner.png';

const StyledWindow = styled(Window)`
  margin: 5vh;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  width: 400px;
  background-color: #000;
`;

const XButton = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;
`;

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (value) => {
    setActiveTab(value);
  };
  return (
    <Wrapper>
      <StyledWindow>
        <WindowHeader>
          👗 planB.exe{' '}
          <XButton size={'sm'} square>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
          </XButton>
        </WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Intro</Tab>
            <Tab value={1}>Mission</Tab>
            <Tab value={2}>Get In Touch</Tab>
          </Tabs>
          {activeTab === 0 && (
            <TabBody>
              <Cutout shadow>
                <Banner src={banner} />
              </Cutout>
            </TabBody>
          )}
        </WindowContent>
      </StyledWindow>
    </Wrapper>
  );
}
