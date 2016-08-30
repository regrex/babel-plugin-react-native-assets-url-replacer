# babel-plugin-react-native-assets-url-replacer
## 简介
替换React Native里的静态资源path，以便于纯jsbundle包热更新，替换规则如下所示：
替换前：

` require('../dir1/dir2/imgFileName.jpg') `

替换后：

` 'https://mycdn.com/path/imgFileName.jpg' `

## 使用说明

```shell

npm install --save-dev babel-plugin-react-native-assets-url-replacer

```

## 相关依赖

` "babel-core": "^6.14.0" `
` "babel-plugin-syntax-jsx": "^6.13.0" `
