export type Option = {
  separator?: string
}

function dashPhoneNumber(str: string, option: Option = {}) {
  if (!option.separator) option.separator = '-'

  const length = str.length

  if (length < 4) return str

  let phone = ''

  if (str.length < 7) {
    phone += str.substr(0, 3)
    phone += option.separator
    phone += str.substr(3)
  } else if (str.length < 11) {
    phone += str.substr(0, 3)
    phone += option.separator
    phone += str.substr(3, 3)
    phone += option.separator
    phone += str.substr(6)
  } else {
    phone += str.substr(0, 3)
    phone += option.separator
    phone += str.substr(3, 4)
    phone += option.separator
    phone += str.substr(7)
  }
  return phone
}

export default dashPhoneNumber
