
#### 数组简单数据去重
***当你需要将数组中的所有重复的元素只保留一个***
```js
const removeDuplicates = list => [...new Set(list)]
removeDuplicates([0, 0, 2, 4, 5]) // [0,2,4,5]
```

#### 数组唯一值数据去重
***当你需要将数组中的所有重复的元素只保留一个***
```js
const duplicateById = list => [...list.reduce((prev, cur) => prev.set(cur.id, cur), new Map()).values()]
duplicateById([{id: 1, name: 'jack'}, {id: 2, name: 'rose'}, {id: 1, name: 'jack'}])
// [{id: 1, name: 'jack'}, {id: 2, name: 'rose'}]

```
#### 手机号格式化
当你需要将手机号码格式化成xxx-xxxx-xxxx的形式
```js
const formatPhone = (str, sign = '-') => str.replace(/(\W|\s)/g, "").split(/^(\d{3})(\d{4})(\d{4})$/).filter(item => item).join(sign)

formatPhone('13123456789') // '131-2345-6789'
formatPhone('13 1234 56 789', ' ') // '131 2345 6789

```

#### web
重新加载当前页面
```javascript
const reload = () => location.reload();
reload()
```
#### 随机颜色生成
当你需要获取一个随机颜色
```javascript
const getRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
getRandomColor() // '#4c2fd7'
```

#### 颜色格式转换
当你需要将16进制的颜色转换成rgb
```javascript
const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map((x) => parseInt(x, 16));
hexToRgb('#00ffff'); // [0, 255, 255]
hexToRgb('#0ff'); // [0, 255, 255]
```