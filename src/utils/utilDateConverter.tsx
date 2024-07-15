export function utilDateConverter(param: string) {
  const data = new Date(param)
  const data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000)
  const dataBase = data2.toISOString().replace(/\.\d{3}Z$/, '')
  return dataBase.replace('T', '    ')
}
