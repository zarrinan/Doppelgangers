import { ref } from 'firebase'

function saveToPics (pic) {
  const picId = ref.child('pics').push().key
  const picPromise = ref.child(`pics/${picId}`).set({...pic, picId})

  return {
    picId,
    picPromise
  }
}

export function savepic (pic) {
   const { picId, picPromise } = saveToPics(pic)

  return Promise.all([
    picPromise,
    saveToPics(pic, picId),
  ]).then(() => ({...pic, picId}) )
}


export function fetchpic (picId) {
  return ref.child(`pics/${picId}`).once('value')
    .then((snapshot) => snapshot.val())
}

export function formatPic (url) {
  return {
    url,
    timestamp: Date.now(),
  }
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}
