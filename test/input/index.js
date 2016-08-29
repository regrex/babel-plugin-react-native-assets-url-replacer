import React, { Component } from 'react';
import ReactNative, {
	Text,
	Navigator,
	StyleSheet,
	TouchableHighlight
} from 'react-native';
import Discovery from './pages/discovery.js';
import Telemedicine from './pages/telemedicine.js';

class MsbuDemo extends Component {
	renderScene(route, navigator) {
		var Component = route.component;
		return (
			<Component navigator={navigator} />
		);
	}

	initLeftBtn(route, navigator, index, navState) {
		if (index === 0) {
			return null;
		} else {
			return(
				<TouchableHighlight underlayColor='#ffffff' onPress={() => navigator.pop()}>
					<Text style={styles.navPrev}>返回</Text>
				</TouchableHighlight>
			);
		}
	}

	initRightBtn(route, navigator, index, navState) {
		return null;
	}

	render() {
		const route = [
			{title: '发现', component: Discovery}
		];
		return (
			<Navigator
				initialRoute={route[0]}
				renderScene={this.renderScene.bind(this)}
				configureScene={() => Navigator.SceneConfigs.FloatFromRight}
				navigationBar={
					<Navigator.NavigationBar
						routeMapper={{
							LeftButton: this.initLeftBtn,
							RightButton: this.initRightBtn,
							Title: (route, navigator, index, navState) =>
							{ return (<Text style={styles.navTitle}>{route.title}</Text>); },
						}}
						style={styles.navbarInner}
					/>
				}
				style={styles.navbarWrap}
			/>
		);
	}
}

const styles = StyleSheet.create({
	navbarWrap: {
		paddingTop: 60
	},
	navbarInner: {
		height: 60,
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderBottomColor: '#dddddd'
	},
	navPrev: {
		marginLeft: 10,
		marginTop: 10
	},
	navNext: {
		marginRight: 10,
		marginTop: 10
	},
	navTitle: {
		marginTop: 10
	}
});

module.exports = MsbuDemo;
