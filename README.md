# dash-phonenumber

핸드폰 번호에 하이픈 (-) 을 추가합니다.

## 설치하기

```
$ npm i dash-phonenumber
```

## 사용하기

```javascript
const dashPhoneNumber = require('./lib/dash-phonenumber').default

console.log(dashPhoneNumber('01033280917', { space: true })) // Result: 010 - 3328 - 0917
console.log(dashPhoneNumber('01033280917', { space: false })) // Result: 010-3328-0917
console.log(dashPhoneNumber('01033280917', { space: false, shape: 'dot' })) // Result: 010.3328.0917
console.log(dashPhoneNumber('01033280917', { space: true, shape: 'dot' })) // Result: 010. 3328. 0917
```

## 옵션

| key   | value   | optional           | description           |
| ----- | ------- | ------------------ | --------------------- |
| space | Boolean | O (default: false) | 하이픈 사이 여백 여부 |
| shape | String  | O (default: dash)  | 'dash' 또는 'dot'     |
