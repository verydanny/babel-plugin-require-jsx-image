# babel-plugin-require-jsx-image

> This plugin simply converts JSX img sources to be required.

## Example

Converts image src string into require call expression. Why? So webpack aliases can be used, doesn't require converting all img sources into requires. Will not touch existing call expressions.

**In**
```js
<img src="images/logo.png" />
```
**Out**
```js
<img src={ require("images/logo.png") }>
```

## Installation

```console
$ npm install --save-dev babel-plugin-webpack-jsx-alias
```

Add it as a plugin to your `.babelrc` file.

```js
{
  "plugins": ["require-jsx-image"]
}
```
