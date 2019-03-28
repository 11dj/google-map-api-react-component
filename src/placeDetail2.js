export async function getDetail (placeName) {
  let output = await 'aa'
  let map = await new window.google.maps.Map('', {});
  const service = await new window.google.maps.places.PlacesService(map)
  let request = await {
    query: placeName,
    fields: ['place_id']
  };

  const placePromise = await new Promise((resolve, reject) => {
    service.findPlaceFromQuery(request, (place, status) => {
      if (status === 'OK') {
        resolve(place)
      } else {
        reject(Error(status))
      }
    })
  })

  const placeDetailPromise = await new Promise((resolve, reject) => {
    service.getDetails({
      placeId: placePromise[0].place_id,
      fields: ['name', 'rating', 'opening_hours', 'address_component']
    }, (placeDetail, statusDetail) => {
      if (statusDetail === 'OK') {
        resolve(placeDetail)
      } else {
        reject(Error(statusDetail))
      }
    })
  })

  output = placeDetailPromise
  return output
}