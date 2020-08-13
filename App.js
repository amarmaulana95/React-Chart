import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";

const data = {
  labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
  datasets: [
    {
      data: []
    }
  ]
}
const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726"
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };

  }

  componentDidMount() {
  this.GetData();
  }

  GetData = () => {
    return fetch('http://192.168.100.158:3000/data')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {

    data.datasets[0].data = this.state.dataSource.map(value => value.IMPORTO);

    return (
      <View>
      <LineChart
      data={data}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel={"$"}
      chartConfig={chartConfig}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
      />
      </View>
    );
}
}