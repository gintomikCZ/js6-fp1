import methods from './methods.js'

methods.get('https://sdaapi.glabazna.eu/js6projects')
  .then(something => {
    console.log(something)
  })
  .then(() => {
    console.log('ahoj')
  })


/*

vrácená promisa
  .then(data => {
    zpracuju data
  })
  .then(() => {
    následné chování - přesměrování vue routeru
  })

*/

methods.post('https://sdaapi.glabazna.eu/js6projects', { project: 'tralala', description: 'bububu'})
  .then(() => {
    console.log('jo, vyslo to')
  })


