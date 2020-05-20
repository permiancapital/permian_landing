import React from 'react';
import { Cutout, TabBody } from 'react95';
import styled from 'styled-components';
import banner from '../../../img/permian_banner.png';

const Banner = styled.img`
  width: 40vw;
  background-color: #000;
`;

const StyledCutout = styled(Cutout)`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  width: calc(40vw - 20px);
  font-size: 16px;
`;

export default function IntroTab() {
  return (
    <TabBody>
      <StyledCutout shadow>
        <Banner src={banner} />
        <TextWrapper>
          <Text>
            Permian Capital Management, LP is a San Francisco based investment management firm that specializes in
            Blockchain technology and seeks to maximize capital appreciation through disciplined, diversified investment
            in digital assets.
          </Text>
        </TextWrapper>
      </StyledCutout>
    </TabBody>
  );
}
