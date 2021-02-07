/**
 * 格式化时间 默认格式: YYYY-MM-DD HH:mm
 */
const format = (time, pattern = 'YYYY-MM-DD HH:mm') => {
  const dater = new Date(time)
  const year = dater.getFullYear()
  const month = dater.getMonth() + 1
  const day = dater.getDate()
  const hour = dater.getHours()
  const minute = dater.getMinutes()

  return pattern
    .replace('YYYY', year)
    .replace('MM', month < 10 ? `0${month}` : month)
    .replace('DD', day < 10 ? `0${day}` : day)
    .replace('HH', hour < 10 ? `0${hour}` : hour)
    .replace('mm', minute < 10 ? `0${minute}` : minute)
}
module.exports = { format }
