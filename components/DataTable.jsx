import React from 'react'
import { Table } from '@nextui-org/react';


const DataTable = () => {
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
        <Table.Column>Nature of Emergency</Table.Column>
        <Table.Column>Severity</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Lugbe</Table.Cell>
          <Table.Cell>8.975073, 7.376306 </Table.Cell>
          <Table.Cell>Fire Outbreak</Table.Cell>
          <Table.Cell>High</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Kuje</Table.Cell>
          <Table.Cell>8.882144, 7.227534 </Table.Cell>
          <Table.Cell>Collapsed Building</Table.Cell>
          <Table.Cell>High</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Wuse</Table.Cell>
          <Table.Cell>9.079818, 7.492241</Table.Cell>
          <Table.Cell>Vehicle Accident</Table.Cell>
          <Table.Cell>Medium</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>4</Table.Cell>
          <Table.Cell>Kubwa</Table.Cell>
          <Table.Cell>9.153849, 7.321965</Table.Cell> 
          <Table.Cell>Flood</Table.Cell>
          <Table.Cell>High</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default DataTable