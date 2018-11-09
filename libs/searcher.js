import config from '../config/names'
export default keyword =>
  config.filter(name => name.includes(keyword)).slice(0, 5)
