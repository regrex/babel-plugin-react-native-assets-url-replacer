import React, { Component } from 'react';
import ReactNative, {
	View,
	Text,
	ScrollView,
	Dimensions
} from 'react-native';
import Service from '../components/service.js';
import Activity from '../components/activity.js';
import Tool from '../components/tool.js';

let screenHeight = Dimensions.get('window').height;

class Discovery extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView style={styles.pageWrap} showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<Service navigator={this.props.navigator}></Service>
					<Activity></Activity>
					<Tool></Tool>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	pageWrap: {
		height: screenHeight,
		backgroundColor: '#dedede'
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column'
	}
};

module.exports = Discovery;
