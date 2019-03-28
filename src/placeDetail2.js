export async function getDetail (placeName) {
  let output = await 'aa'
  let map = await new window.google.maps.Map('', {});
  const service = await new window.google.maps.places.PlacesService(map)
  let request = await {
    query: placeName,
    fields: ['place_id']
  };
  await service.findPlaceFromQuery(request, async (place, status) => {
    console.log('placeId', place[0].place_id)
    await service.getDetails({
      placeId: place[0].place_id,
      fields: ['name', 'rating', 'opening_hours', 'address_component']
    }, async (placeD, statusD) => {
      output = await placeD
      // await console.log('Detail', placeD)
      // await console.log('Detail rating', placeD.rating)
      // await console.log('Detail opening_now', placeD.opening_hours.open_now)
      // await console.log('Detail opening_hours', placeD.opening_hours)
      // return placeD
    })
  });
  return output
}