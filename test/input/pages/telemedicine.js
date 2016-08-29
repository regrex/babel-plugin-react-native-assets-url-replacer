import React, { Component } from 'react';
import ReactNative, {
	View,
	Text,
	Image,
	StyleSheet,
	ListView,
	ScrollView,
	TouchableHighlight,
	Dimensions
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class Telemedicine extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name });
		this.state = {
			inspectList: ds.cloneWithRows(inspectList)
		};
	}

	renderRow(rowData) {
		return (
			<View style={styles.inspectItem}>
				<Image style={styles.inspectImg} source={rowData.imgUrl} />
				<View style={styles.inspectMeta}>
					<Text style={styles.inspectName}>{rowData.name}</Text>
					<Text style={styles.inspectDesc}>{rowData.desc}</Text>
					<View style={styles.inspectTextWrap}>
						<Text style={styles.inspectSell}>已售{rowData.sell}份</Text>
						<View style={styles.priceWrap}>
							<Image style={styles.priceIcon} source={require('../assets/img/sell.jpg')} />
							<Text style={styles.inspectPrice}>￥{rowData.price}元/次</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}

	render() {
		return (
			<ScrollView style={styles.pageWrap} showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<Image style={styles.bannerImg} source={require('../assets/img/inspection.png')} />
					<ListView style={styles.inspectList} contentContainerStyle={styles.inspectCnt}
						dataSource={this.state.inspectList}
						renderRow={this.renderRow.bind(this)}
					/>
				</View>
			</ScrollView>
		);
	}
}

const inspectList = [
	{
		name: '关爱儿童成长套餐',
		imgUrl: require('../assets/img/tool01.jpg'),
		desc: '了解孩子偏瘦、偏矮、甚至是肥胖的真正原因',
		price: 259,
		sell: 199
	}, {
		name: '卵巢储备功能评估',
		imgUrl: require('../assets/img/tool02.jpg'),
		desc: '评估女性的卵巢功能，可评价女性目前的生育能力。',
		price: 193,
		sell: 199
	}, {
		name: '胃痛检测套餐',
		imgUrl: require('../assets/img/tool03.jpg'),
		desc: '进行初步胃痛查因，不需要直接经历胃镜的痛苦',
		price: 222,
		sell: 259
	}, {
		name: '关爱加班狗体检套餐',
		imgUrl: require('../assets/img/tool04.jpg'),
		desc: '针对加班、熬夜、应酬喝酒人群设计的套餐。',
		price: 321,
		sell: 399
	}, {
		name: '甲状腺体检套餐',
		imgUrl: require('../assets/img/tool05.jpg'),
		desc: '专业检测，精准排查，早发现，早治疗。',
		price: 257,
		sell: 99
	}, {
		name: '女性肿瘤标志物体检套餐',
		imgUrl: require('../assets/img/tool06.jpg'),
		desc: '高灵敏度检测，全方位呵护女性健康（乳腺癌、宫颈癌、子宫内膜癌、卵巢癌）。',
		price: 222,
		sell: 259
	}
];

const styles = {
	pageWrap: {
		height: screenHeight
	},
	container: {
		flexDirection: 'column',
		backgroundColor: '#dedede'
	},
	bannerImg: {
		resizeMode: Image.resizeMode.cover,
		width: screenWidth,
		height: 200
	},
	inspectList: {
		height: screenHeight - 200
	},
	inspectCnt: {
		backgroundColor: '#ffffff'
	},
	inspectItem: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#dddddd'
	},
	inspectImg: {
		width: 96,
		height: 80,
		marginRight: 10,
		borderRadius: 2
	},
	inspectMeta: {
		flex: 1
	},
	inspectName: {
		fontSize: 18,
		color: '#333333',
		marginBottom: 6
	},
	inspectDesc: {
		fontSize: 14,
		color: '#999999',
		lineHeight: 16
	},
	inspectTextWrap: {
		flexDirection: 'row',
		marginTop: 4
	},
	inspectSell: {
		flex: 1,
		color: '#999999'
	},
	priceWrap: {
		flexDirection: 'row'
	},
	priceIcon: {
		width: 84,
		height: 20
	},
	inspectPrice: {
		color: '#fd9726',
		fontSize: 12
	},
};

module.exports = Telemedicine;
