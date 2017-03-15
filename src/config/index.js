// https://cors-anywhere.herokuapp.com - proxy; cors fix
export default {
  client_id: '94005a96dcc13e94cff3',
  client_secret: 'b6480421253e5d274bfb6dd577554d1b8f521abd',
  auth_link: `https://github.com/login/oauth/authorize?client_id=94005a96dcc13e94cff3&scope=user%20repo&redirect_uri=${window.location.href}`,
  get_token_link: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token'
}