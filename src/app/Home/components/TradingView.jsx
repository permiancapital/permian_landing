import React, { useEffect } from 'react';
import { Window, WindowHeader, Button } from 'react95';
import styled from 'styled-components';

const StyledWindow = styled(Window)`
  margin: 5vh;
  width: 650px;
  z-index: 2;
`;

const StyledHeader = styled(WindowHeader)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const XButton = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;
`;

export default function TradingView({ handleTradingView }) {
  useEffect(() => {
    if (document.getElementById('trading-view')) {
      var tradingview_embed_options = {};
      tradingview_embed_options.width = '640';
      tradingview_embed_options.height = '400';
      tradingview_embed_options.chart = 'TNx0bAFr';
      tradingview_embed_options.container_id = 'trading-view';
      new window.TradingView.chart(tradingview_embed_options);
    }
  }, []);
  return (
    <StyledWindow>
      <StyledHeader>
        TradingView Ideas{' '}
        <XButton size={'sm'} square onClick={handleTradingView}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </XButton>
      </StyledHeader>
      <div id="trading-view" />
    </StyledWindow>
  );
}
