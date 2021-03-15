type Option = {}

function useDash(str: string, option: Option = {}): string {
  const number = str.replace(/[^0-9]/g, '')
  const length = number.length

  if (length < 4) return number

  let phone = ''

  if (number.length < 7) {
    phone += number.substr(0, 3)
    phone += '-'
    phone += number.substr(3)
  } else if (number.length < 11) {
    phone += number.substr(0, 3)
    phone += '-'
    phone += number.substr(3, 3)
    phone += '-'
    phone += number.substr(6)
  } else {
    phone += number.substr(0, 3)
    phone += '-'
    phone += number.substr(3, 4)
    phone += '-'
    phone += number.substr(7)
  }
  return phone
}

export default { useDash }
