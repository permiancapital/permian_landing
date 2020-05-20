import React, { useState } from 'react';
import { List, ListItem, Button } from 'react95';
import styled from 'styled-components';
import pTiger from '../../../img/permian_tiger_v2.png';

const StyledImg = styled.img`
  height: 26px;
  width: 26px;
`;

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
          <ListItem>🏡 Home</ListItem>
          <ListItem>📁 Latest Posts</ListItem>
          <ListItem>🐳 EzeDex</ListItem>
          <ListItem>🏛 About</ListItem>
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        <StyledImg src={pTiger} /> &nbsp;Start
      </Button>
    </div>
  );
}
