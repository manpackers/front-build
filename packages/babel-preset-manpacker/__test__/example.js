const a = () => {
  // eslint-disable-next-line
  console.log(a)
}
a()
const Decorators = () => {}

@Decorators({
  props: {}
})
// eslint-disable-next-line
class Test {
  name = 1

  test = () => {
    // eslint-disable-next-line
    console.log('test methods')
  }
}
