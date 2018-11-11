export default (name, data, picture) =>
  new Promise(async (resolve, reject) => {
    String.prototype.replaceAll = function(search, replacement) {
      var target = this
      return target.replace(new RegExp(search, 'g'), replacement)
    }
    if (data.length === 0) return reject(0)
    let level = data.length > 12 ? 12 : data.length
    let effect = data[0][0].detail[0]
    effect = effect.replaceAll(' ', '%20')
    effect = effect.replaceAll('&', '&26')
    let creator = `politic%20warrior`
    let type = `politician`
    let url = `https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=&cardtype=Monster&subtype=normal&attribute=Light&level=${level}&rarity=Common&picture=${picture}&circulation=x&set1=x&set2=x&type=${type}&carddescription=&atk=${1000 +
      data.length *
        200}&def=${1000}&creator=${creator}&year=2018&serial=00000000`
    url = url.replaceAll(' ', '%20')
    url = url.replaceAll('&', '%26')
    let webUrl = `/card?name=${name}&picture=${url}&effect=${effect}`
    console.log(webUrl)
    /*
    webUrl = webUrl.replaceAll(' ', '%20')
    webUrl = webUrl.replaceAll('&', '%26')
    let urls = `https://v2.convertapi.com/convert/web/to/jpg?Secret=SJny3EVyLMMq09ZL&Url=${webUrl}`
    let picData = await fetch(urls).then(res => res.json())
*/
    resolve(webUrl)
  })
