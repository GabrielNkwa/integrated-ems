import React from 'react'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FloodIcon from '@mui/icons-material/Flood';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';




export default function Emergency() {
  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
    }}
  >
    <div><h4>Nature of Emergency</h4></div>
    <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalFireDepartmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fire Outbreak" secondary="" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FloodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Flood" secondary="" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CarCrashIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vehicle Accident" secondary="" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ApartmentIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Collapsed Building" secondary="" />
      </ListItem>
    </List>

  )
}
