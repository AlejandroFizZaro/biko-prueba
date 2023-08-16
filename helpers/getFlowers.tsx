export default async function getFlowers() {
    const res = await fetch(`https://dulces-petalos.herokuapp.com/api/product`)
    return res.json()
}