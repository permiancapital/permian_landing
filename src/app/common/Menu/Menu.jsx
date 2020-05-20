import React, { useState } from 'react';
import { List, ListItem, Button, Divider } from 'react95';
import styled from 'styled-components';
import pTiger from '../../../img/permian_tiger_v2.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledImg = styled.img`
  height: 26px;
  width: 26px;
`;

const Btc = styled.span`
  color: #f79419;
`;

const StartBtn = styled(Button)`
  font-weight: bold;
  margin-right: 4px;
`;

export default function Menu() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Wrapper>
      {open && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
          <ListItem>
            <span role="img" aria-label="home">
              🏡
            </span>{' '}
            Home
          </ListItem>
          <ListItem>
            <span role="img" aria-label="folder">
              📁
            </span>{' '}
            Latest Posts
          </ListItem>
          <ListItem>
            <span role="img" aria-label="whale"></span>🐳 EzeDex
          </ListItem>
          <ListItem>
            <span role="img" aria-label="bank">
              🏛
            </span>{' '}
            About
          </ListItem>
        </List>
      )}
      <StartBtn onClick={handleClick} active={open} size="md">
        <StyledImg src={pTiger} /> &nbsp;Start
      </StartBtn>
      <Divider vertical size="md" />
      <Btc>₿</Btc>
    </Wrapper>
  );
}
