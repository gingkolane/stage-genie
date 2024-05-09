import React from 'react';
import { List } from 'react-native-paper';

// This is a functional component that takes in a list of items and display a list of items in react native paper list grouped by category.
const ListComponent = (listItems) => {

  let categories = [...new Set(listItems.map(item => item.category))];
  // A Set is a built-in JavaScript object that only allows unique values. new Set(...) creates a new Set object from the array of categories. 

  return ( 
    <>
      {categories.map(category => {

        let itemsInCategory = listItems.filter(item => item.category === category);

        return (  
          <List.Section key={category}>
            <List.Subheader>{category}</List.Subheader>
              {itemsInCategory.map(item =>
                (<List.Item 
                  key = {item.title}
                  title={item.title} 
                  left={() => <List.Icon icon={item.icon}/>} 
                  right={item.right} 
                  onPress={item.onPress} 
                  />
                ))
              }
          </List.Section>
        )
        })
      }
    </>
  );
}

// One listItem should have at least two fields: title and category(for grouping under the same subheader), 
// optionally having subtitle, description, left, right, onPress
// listItems should be an array of json objects
// example of listItems
const listItems = [
  {
    title: 'Item 1',
    category: 'Category 1',
    icon: 'home',
    right: () => <List.Icon icon="chevron-right" />,
    onPress: () => console.log('Item 1 pressed'),
  },
  {
    title: 'Item 2',
    category: 'Category 1',
    icon: 'settings',
    right: () => <List.Icon icon="chevron-right" />,
    onPress: () => console.log('Item 2 pressed'),
  },
  {
    title: 'Item 3',
    category: 'Category 2',
    icon: 'folder',
    right: () => <List.Icon icon="chevron-right" />,
    onPress: () => console.log('Item 3 pressed'),
  },
];

export default ListComponent
