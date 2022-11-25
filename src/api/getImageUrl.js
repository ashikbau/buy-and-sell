export const getImageUrl = async (image) => {

    let formData = new FormData()
    formData.append('image', image)

    const res = await fetch(`https://api.imgbb.com/1/upload?key=3a23e3b03d072e5560b16694253bc0da`, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()
    return data.data.display_url

}