import * as React from "react";
import { ScrollView, StyleSheet,Text,View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

// const renderTime = (rowData, sectionID, rowID) => {
//   const itemYear = new Date(rowData.time).getFullYear();
//   let divider = null;

//   if (itemYear !== currentYear) {
//     currentYear = itemYear;
//     divider = <View style={{width: '100%', height: 1, backgroundColor: 'gray'}} />;
//   }

//   // Render the rest of the time...

//   return (
//     <View>
//       {divider}
//       {/* The rest of the time... */}
//     </View>
//   );
// };

const renderDetail = (rowData, sectionID, rowID) => {

  let title = null
  title = <Text style={[styles.title]}>{rowData.condition}</Text>
  let desc = null
  if(rowData)
    desc = (
      <View style={styles.descriptionContainer}>
        <Text style={[styles.textDescription]}>{rowData.doctorName}</Text>
        <Text style={[styles.textDescription]}>{rowData.hospitalName}</Text>
        <Text style={[styles.textDescription]}>{rowData.medicationPerscribed}</Text>
      </View>
    )

  return (
    <View style={{flex:1}}>
      {title}
      {desc}
    </View>
  )
}

const TimelineComponent = ({data}) =>  {
  console.log(data)
  return (
     <View style={styles.container}>
     <Timeline 
       style={styles.list}
       data={data}
       separator={false}
       circleSize={20}
       circleColor='rgb(45,156,219)'
       lineColor='rgb(45,156,219)'
       detailContainerStyle={styles.detailContainerStyle}
       timeContainerStyle={{minWidth:52, marginTop: -5}}
       timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
       renderTime={(rowData) => <Text>{rowData.time}</Text>}
       descriptionStyle={{color:'gray'}}
       renderDetail={(rowData) => renderDetail(rowData)}
       columnFormat='single-column-left'
       options={{
         style:{paddingTop:5}
       }}
     />
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	  paddingTop:50,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  detailContainerStyle:{ 
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: -5,
    padding: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 3,
    shadowRadius: 2,
    marginBottom: 20
  },
  title:{
    fontSize:16,
    fontWeight: 'bold', 
    paddingTop: 5
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },

  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});

export default TimelineComponent;