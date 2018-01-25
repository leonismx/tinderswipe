import React, {PureComponent} from 'react'
import { StyleSheet, Text, View,Image,Alert} from 'react-native'
import { TagSelect } from 'react-native-tag-select';
import { Button } from 'react-native-elements'

export default class SelectButtonCard extends PureComponent {
  constructor(props) {
      super(props);

      console.log(this.props.doneSelection)
      this.state = {
         leon: this.props.doneSelection
     };
  }

  getInnerData() {
    // this.state.leon
    }
  render() {
    const data = [
      { id: 1, label: 'Organized' },
      { id: 2, label: 'Structured' },
      { id: 3, label: 'Goal-oriented' },
      { id: 4, label: 'Spontaneous' },
      { id: 5, label: 'Flexible' },
      { id: 6, label: 'Process-oriented' },

    ];

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Choose the words which best describes you:</Text>
        <TagSelect
          data={data}
          itemStyle={styles.item}
          itemLabelStyle={styles.label}
          itemStyleSelected={styles.itemSelected}
          itemLabelStyleSelected={styles.labelSelected}
        />
        <View style={styles.buttonContainer}>

        <View style={styles.buttonInner}>
        <Button textStyle={{fontSize:22}}
          color="#2f3847"
          transparent= {true}
          onPress = {this.state.leon}
          title='Continue -->' />
          </View>
        </View>

    </View>
  );
}
}
        // <Text style={styles.labelText}>Payment:</Text>
        // <TagSelect
        //   data={data}
        //   max={3}
        //   ref={(tag) => {
        //     this.tag = tag;
        //   }}
        //   onMaxError={() => {
        //     Alert.alert('Ops', 'Max reached');
        //   }}
        // />
        // <View style={styles.buttonContainer}>
        //   <View style={styles.buttonInner}>
        //     <Button
        //       title="Get selected count"
        //       style={styles.button}
        //       onPress={() => {
        //         Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
        //       }}
        //     />
        //   </View>
        //   <View>
        //     <Button
        //       title="Get selected"
        //       onPress={() => {
        //         Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
        //       }}
        //     />
        //   </View>
        // </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 10,
  },
  buttonContainer: {
    padding: 15,
    marginTop:30
  },
  buttonInner: {
    marginBottom: 15,
  },

  labelText: {
    color: '#333',
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 15,
    marginTop:30
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333'
  },
  itemSelected: {
    backgroundColor: '#2f3847',
  },
  labelSelected: {
    color: '#FFF',
  },
});
