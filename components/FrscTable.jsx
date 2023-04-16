import React from 'react'
import { Table } from '@nextui-org/react';
import { Button } from '@mui/material'

const FrscTable = () => {
  return (

    <Table
    aria-label="Example table with static content"
    css={{
      height: "auto",
      minWidth: "100%",
    }}
  >
      <Table.Header>
      <Table.Column>#</Table.Column>
      <Table.Column>Location</Table.Column>
      <Table.Column>Coordinates</Table.Column>
     <Table.Column>Severity</Table.Column>
    </Table.Header>
    <Table.Body>
    <Table.Row key="1">
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Lugbe</Table.Cell>
          <Table.Cell>8.975073, 7.376306 </Table.Cell>
          <Table.Cell><Button className='bg-red-500' variant="contained">High</Button></Table.Cell>
        </Table.Row>
    </Table.Body>
    </Table>
  )
}

export default FrscTable