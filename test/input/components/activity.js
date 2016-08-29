import React, { Component } from 'react';
import ReactNative, {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
	NativeModules,
	Platform,
	ToastAndroid
} from 'react-native';

let screenWidth = Dimensions.get('window').width;

class Activity extends Component {
	rowPressed () {
		Platform.select({
			ios: () => NativeModules.BMPRNViewController.pushToMyCollect('huangkuan is good boy'),
			android: () => NativeModules.MyIntentModule.getDataFromIntent(
				(successMsg) => {
					ToastAndroid.show(successMsg, ToastAndroid.SHORT);
				},
				(errMsg) => {
					console.warn(errMsg);
					ToastAndroid.show(errMsg, ToastAndroid.SHORT);					
				}
			)
		})();
	}

	render() {
		return (
			<TouchableHighlight onPress={() => this.rowPressed()}>
				<View style={styles.activityWrap}>
					<Image style={styles.activityImg} source={{uri: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/activity01.jpg'}} />
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	activityWrap: {
		marginBottom: 10
	},
	activityImg: {
		resizeMode: Image.resizeMode.cover,
		width: screenWidth,
		height: 120
	}
});

module.exports = Activity;