export default title =>
  new Promise(async (resolve, reject) => {
    let a = await fetch(
      `https://th.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&origin=*&titles=${title}&format=json`,
    ).then(res => res.json())
    let b = a.query.pages
    let c = b[Object.keys(b)[0]]
    let text = c.revisions[0]['*']
    resolve(text)
  })
