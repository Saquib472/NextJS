export default async function Comments({params}) {
    const {blogID} = await params
  return (
    <div>All Comments of blog ID : {blogID}</div>
  )
}
