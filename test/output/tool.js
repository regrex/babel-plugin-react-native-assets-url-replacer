import React, { Component } from 'react';
import ReactNative, { View, Text, Image, ListView, StyleSheet, TouchableHighlight, Dimensions, NativeModules, Platform } from 'react-native';
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

const toolList = [{
	imgUrl: 'https://mycdn.com/tool01.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool02.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool03.jpg'
}, {
	imgUrl: 'https://mycdn.com/tool04.jpg'
}];

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
		height: rowListWidth * 2
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