import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";

const data = {
  labels: ["Gen", "Feb", "Mar", "Apr", "Mei", "Juni", "Juli", "Ags", "Sep", "Okt", "Nov", "Des"],
  datasets: [
    {
      data: []
    }
  ]
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      //statis race
      dataSource: [{"total":122.51},{"total":911},{"total":1188.53},{"total":12},{"total":390.65},{"total":54.98}]
    };

  }

  componentDidMount() {
  this.JsonAing();
  }

  JsonAing = () => {
    // return fetch('http://rajacepat.com/')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     isLoading: false,
    //     dataSource: responseJson
    //   });
    // })
    // .catch((error) =>{
    //   console.error(error);
    // });
  }

  render() {
    data.datasets[0].data = this.state.dataSource.map(value => value.total);
    return (
      <View>
     <LineChart
        verticalLabelRotation={110} //Degree to rotate
        data={data}
        width={Dimensions.get("window").width*0.9}
        height={400}
        yAxisLabel={"DH"}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={'Rs'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
       />
      </View>
    );
}
}
