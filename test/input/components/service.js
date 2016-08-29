import React, { Component } from 'react';
import ReactNative, {
	View,
	Text,
	Image,
	ListView,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
	NativeModules,
	Platform
} from 'react-native';
import Telemedicine from '../pages/telemedicine.js';
import Surgrey from '../pages/surgrey.js';
import Readpic from '../pages/readpic.js';
import Sleep from '../pages/sleep.js';
import Insurance from '../pages/insurance.js';
import Drug from '../pages/drug.js';
import Marks from '../pages/marks.js';
import Charitable from '../pages/charitable.js';

let screenWidth = Dimensions.get('window').width;
let cols = 4;
let rowListWidth = screenWidth / cols;

class Service extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name });
		this.state = {
			serviceList: ds.cloneWithRows(serviceList)
		};
	}

	renderRow(rowData) {
		return (
			<TouchableHighlight style={styles.serviceItem} underlayColor='#ffffff' onPress={() => this.rowPressed(rowData)}>
				<View>
					<Image style={styles.serviceImg} source={{uri: rowData.imgUrl}} />
					<Text style={styles.serviceName}>{rowData.name}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	rowPressed(rowData) {
		// this.props.navigator.push({
		// 	title: rowData.name,
		// 	component: rowData.pageID,
		// 	passProps: {}
		// });
		let testObj = {
			'name': 'xixi',
			'age': 26,
			'isLogin': true,
			'hobby': ['篮球', '羽毛球', '骑行'],
			'address': {
				'city': '北京',
				'room': '822301'
			}
		};
		Platform.select({
			ios: () => NativeModules.BMPRNViewController.pushToMyCollect('huangkuan is good boy'),
			android: () => NativeModules.MyIntentModule.startActivityByString('com.baidu.patient.react.TestActivity', JSON.stringify(testObj))
		})();
	}

	render() {
		return (
			<View style={styles.serviceWrap}>
				<Text style={styles.serviceTitle}>优质服务</Text>
				<ListView style={styles.serviceList} contentContainerStyle={styles.serviceCnt}
					dataSource={this.state.serviceList}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
}

const serviceList = [
	{
		name: '远程会诊',
		imgUrl: 'https://dpp1.bdstatic.com/static/pc/201608122037/assets/common/img/detail/logo.png',
		pageID: Telemedicine
	}, {
		name: '名医手术',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/surgrey.png',
		pageID: Surgrey
	}, {
		name: '影像解读',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/readpic.png',
		pageID: Readpic
	}, {
		name: '睡眠检测',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/sleep.png',
		pageID: Sleep
	}, {
		name: '保险商城',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/insurance.png',
		pageID: Insurance
	}, {
		name: '药品购买',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/drug.png',
		pageID: Drug
	}, {
		name: '药师咨询',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/marks.png',
		pageID: Marks
	}, {
		name: '慈善救助',
		imgUrl: 'http://fedev.baidu.com/~dengxi/react-native-bundle/ios/assets/src/assets/img/charitable.png',
		pageID: Charitable
	}
];

const styles = StyleSheet.create({
	serviceWrap: {
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: '#ffffff'
	},
	serviceTitle: {
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 20,
		color: '#333333'
	},
	serviceList: {
		width: screenWidth,
		height: rowListWidth * 2,
	},
	serviceCnt: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	serviceItem: {
		justifyContent: 'center',
		alignItems: 'center',
		width: rowListWidth,
		height: rowListWidth
	},
	serviceImg: {
		width: 40,
		height: 40
	},
	serviceName: {
		flex: 1,
		marginTop: 6,
		color: '#666666',
		fontSize: 14
	}
});

module.exports = Service;