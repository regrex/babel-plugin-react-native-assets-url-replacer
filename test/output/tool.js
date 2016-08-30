import React, { Component } from 'react';
import ReactNative, { View, Text, Image, StyleSheet, ListView, TouchableHighlight, Dimensions } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let cols = 4;
let rowListWidth = screenWidth / cols;

class Tool extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.name !== r2.name });
		this.state = {
			toolList: ds.cloneWithRows(toolList)
		};
	}

	renderRow(rowData) {
		return <TouchableHighlight underlayColor="#dddddd">
				<View style={styles.toolItem}>
					<Image style={styles.toolImg} source={rowData.imgUrl} />
				</View>
			</TouchableHighlight>;
	}

	render() {
		return <View style={styles.toolWrap}>
				<Text style={styles.toolTitle}>健康工具</Text>
				<ListView style={styles.toolList} contentContainerStyle={styles.toolCnt} dataSource={this.state.toolList} renderRow={this.renderRow.bind(this)} />
			</View>;
	}
}

const styles = StyleSheet.create({
	toolWrap: {
		marginBottom: 10,
		backgroundColor: '#ffffff'
	},
	toolTitle: {
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 20,
		color: '#333333'
	},
	toolList: {
		width: screenWidth,
		height: rowListWidth
	},
	toolCnt: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	toolItem: {
		justifyContent: 'center',
		alignItems: 'center',
		width: rowListWidth,
		height: rowListWidth
	},
	toolImg: {
		width: 80,
		height: 60
	}
});

const toolList = [{
	imgUrl: 'https://mycdn.com/tool01.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool02.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool03.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool04.jpg'
}];

module.exports = Tool;