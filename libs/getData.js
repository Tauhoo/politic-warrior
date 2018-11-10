import wtf from 'wtf_wikipedia'
export default title =>
  new Promise(async (resolve, reject) => {
    let respon = await fetch(
      `https://th.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&titles=${title}&format=json`,
    ).then(res => res.json())
    let pages = respon.query.pages
    let o = pages[Object.keys(pages)[0]]
    let text = o.revisions[0]['*']
    let sections = wtf(text).data.sections
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
    resolve(result)
  })

function modifyData(topic) {
  return {
    title: topic.title,
    detail: topic.paragraphs.map(paragraph =>
      paragraph.data.sentences.map(sentence => sentence.data.text).join(''),
    ),
  }
}
