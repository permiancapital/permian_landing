import React, { useState } from 'react'
import { Toolbar, TextField, List, ListItem, Divider, Button, LogoIcon } from 'react95'

export default function Menu() {
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
          <ListItem>🏛 About</ListItem>
          <ListItem>📁 Latest Posts</ListItem>
          <ListItem>🐳 EzeDex</ListItem>
          <Divider />
          <ListItem disabled>🔙 Logout</ListItem>
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        Start
      </Button>
    </div>
  )
}
