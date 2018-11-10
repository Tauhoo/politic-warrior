export default (name, data, picture) =>
  new Promise(async (resolve, reject) => {
    if (data.length === 0) return reject(0)
    let level = data.length > 12 ? 12 : data.length
    let effect = data[0][0].detail
    let creator = `politic%20warrior`
    let type = `politician`
    let url = `https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=${''}&cardtype=Monster&subtype=normal&attribute=Light&level=${level}&rarity=Common&picture=${picture}&circulation=x&set1=x&set2=x&type=${type}&carddescription=${''}&atk=${1000 +
      data.length *
        200}&def=${1000}&creator=${creator}&year=2018&serial=00000000`
    let webUrl = `http://localhost:3000/card?name=${name}&picture=${url.replace(
      '&',
      '%26',
    )}&effect=${effect}`
    let urls = `https://v2.convertapi.com/convert/web/to/jpg?Secret=SJny3EVyLMMq09ZL&Url=${webUrl}`
    let picData = await fetch(urls).then(res => res.json())
    resolve(`data:image/jpeg;,${picData}`)
  })
