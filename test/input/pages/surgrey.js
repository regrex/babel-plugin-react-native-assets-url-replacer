import React, { Component } from 'react';
import ReactNative, {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight
} from 'react-native';

class Surgrey extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Surgrey Service</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		backgroundColor: '#dedede'
	}
};

module.exports = Surgrey;