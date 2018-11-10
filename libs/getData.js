import wtf from 'wtf_wikipedia'

const getImage = name =>
  new Promise(async (resolve, reject) => {
    let url = `https://th.wikipedia.org/w/api.php?action=query&origin=*&titles=Image:${name}&prop=imageinfo&iiprop=url&format=json`
    console.log('  ooo ' + url)
    let respon = await fetch(url).then(res => res.json())
    let pages = respon.query.pages
    let result = pages[Object.keys(pages)[0]].imageinfo[0].url
    resolve(result)
  })
export default title =>
  new Promise(async (resolve, reject) => {
    let respon = await fetch(
      `https://th.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&titles=${title}&format=json`,
    ).then(res => res.json())
    let pages = respon.query.pages
    let o = pages[Object.keys(pages)[0]]
    let text = o.revisions[0]['*']
    let sections = wtf(text).data.sections
    let subDetail = sections[0].data.templates
    let imageName = subDetail[subDetail.length - 1].data.image
    let imageUrl = await getImage(imageName).then(result => result)
    let result = []
    let stack = []
    for (let section of sections) {
      let data = modifyData(section.data)
      if (section.depth == 0) {
        if (stack.length == 0) {
          stack.push(data)
        } else {
          result.push(stack)
          stack = [data]
        }
      } else {
        stack.push(data)
      }
    }
    resolve({ result, subDetail, imageUrl })
  })

function modifyData(topic) {
  return {
    title: topic.title,
    detail: topic.paragraphs.map(paragraph =>
      paragraph.data.sentences.map(sentence => sentence.data.text).join(''),
    ),
  }
}
