import config from '../config/names'
export default keyword =>
  config
    .filter(name => name.slice(0, keyword.length).includes(keyword))
    .slice(0, 5)
