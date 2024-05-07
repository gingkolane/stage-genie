import React from 'react';
import { List } from 'react-native-paper';

const ListComponent = () => {
  return (
    <>
      <List.Section>
        <List.Subheader>Doctors</List.Subheader>
        <List.Item title="Chernoff" left={() => <List.Icon icon="folder" />} />
        <List.Item
          title="Johnson"
          left={() => <List.Icon color="#9C27B0" icon="folder" />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Visits</List.Subheader>
        <List.Item title="Visit1" left={() => <List.Icon icon="folder" />} />
        <List.Item
          title="Visit2"
          left={() => <List.Icon color="#9C27B0" icon="folder" />}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Conditions</List.Subheader>
        <List.Item title="Condition1" left={() => <List.Icon icon="folder" />} />
      </List.Section>
    </>
  );
};

export default ListComponent;
