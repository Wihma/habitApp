export default function auth ({ next, router }) {
  if (!localStorage.getItem('jwt')) {
    console.log('jwt doesnt exists')
    return router.push({ name: 'login' })
  }
  console.log('jwt exists')
  return next()
}
