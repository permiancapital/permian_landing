import React from 'react';
import { AppBar, TextField, Toolbar } from 'react95';
import styled from 'styled-components';
import Menu from '../Menu';

const StyledAppBar = styled(AppBar)`
  position: relative;
`;

const RightBar = styled.div`
  display: flex;
`;

const BtcDiv = styled.div`
  position: relative;
  width: 100px;
`;

const BtcSpan = styled.span`
  position: absolute;
  bottom: 8px;
  width: 100px;
`;

const Btc = styled.span`
  color: #f79419;
`;

export default function PermianAppBar() {
  return (
    <StyledAppBar fixed={false}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Menu />
        <TextField placeholder="Search..." width={150} style={{ marginLeft: 4, position: 'relative' }} />
      </Toolbar>
    </StyledAppBar>
  );
}
