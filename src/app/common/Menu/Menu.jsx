import React, { useState } from 'react';
import { List, ListItem, Button, Divider } from 'react95';
import styled from 'styled-components';
import pTiger from '../../../img/permian_tiger_v2.png';
import btcSml from '../../../img/icons/btc_small.png';
import ethSml from '../../../img/icons/eth_small.png';
import linkSml from '../../../img/icons/link_small.png';
const icons = [{ img: btcSml }, { img: ethSml }, { img: linkSml }];

const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 3;
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
  margin-right: 6px;
`;

const MenuBtn = styled(Button)``;
const MenuImg = styled.img`
  width: 24px;
  height: 24px;
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
      {icons.map((icon) => {
        return (
          <MenuBtn variant="menu">
            <MenuImg src={icon.img} />
          </MenuBtn>
        );
      })}
      <Divider vertical size="md" />
    </Wrapper>
  );
}
