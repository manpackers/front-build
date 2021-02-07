const dater = new Date()
/**
 *
 */
const format = (pattern = 'yyyy-mm-dd') => {
  const month = dater.getMonth() + 1
  const date = dater.getDate()

  try {
    return [
      dater.getFullYear(), (month > 10 ? month : `0${month}`), date > 10 ? date : `0${date}`
    ].join(
      pattern.match(/^(y{4})([^ymd])*(m{2})\2(d{2})$/).splice(2, 1)
    )
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Example: yyyy-mm-dd or yyyy/mm/dd')
  }
}
module.exports = { format }
