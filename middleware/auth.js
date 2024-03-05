export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useState('isLoggedIn', () => false);

  if (isLoggedIn.value) {
    return
  }

  return navigateTo('/login')
})