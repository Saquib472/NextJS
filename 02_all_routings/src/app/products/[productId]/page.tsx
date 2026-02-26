export default async function Product({params}: {params : Promise<{productId: string}>}) {
    const productId = (await params).productId
  return (
    <div>Deatils about Product {productId}</div>
  )
}
