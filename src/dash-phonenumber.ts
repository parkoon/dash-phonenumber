export type Option = {
  separator?: string
}

function dashPhoneNumber(str: string, option: Option = {}) {
  if (!option.separator) option.separator = '-'

  const number = str.replace(/[^0-9]/g, '')
  const length = number.length

  if (length < 4) return number

  let phone = ''

  if (number.length < 7) {
    phone += number.substr(0, 3)
    phone += option.separator
    phone += number.substr(3)
  } else if (number.length < 11) {
    phone += number.substr(0, 3)
    phone += option.separator
    phone += number.substr(3, 3)
    phone += option.separator
    phone += number.substr(6)
  } else {
    phone += number.substr(0, 3)
    phone += option.separator
    phone += number.substr(3, 4)
    phone += option.separator
    phone += number.substr(7)
  }
  return phone
}

export default dashPhoneNumber
