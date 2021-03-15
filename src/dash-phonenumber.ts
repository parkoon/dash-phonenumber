export type Option = {
  shape: 'dash' | 'dot'
  space: boolean
}

function dashPhoneNumber(str: string, option: Option = { shape: 'dash', space: false }) {
  if (!option.shape) option.shape = 'dash'
  if (!option.space) option.space = false

  const number = str.replace(/[^0-9]/g, '')
  const length = number.length

  const shape = option.shape === 'dash' ? '-' : '.'

  const shapeWithSpace = option.space
    ? option.shape === 'dash'
      ? ` ${shape} `
      : `${shape} `
    : shape

  if (length < 4) return number

  let phone = ''

  if (number.length < 7) {
    phone += number.substr(0, 3)
    phone += shapeWithSpace
    phone += number.substr(3)
  } else if (number.length < 11) {
    phone += number.substr(0, 3)
    phone += shapeWithSpace
    phone += number.substr(3, 3)
    phone += shapeWithSpace
    phone += number.substr(6)
  } else {
    phone += number.substr(0, 3)
    phone += shapeWithSpace
    phone += number.substr(3, 4)
    phone += shapeWithSpace
    phone += number.substr(7)
  }
  return phone
}

export default dashPhoneNumber
