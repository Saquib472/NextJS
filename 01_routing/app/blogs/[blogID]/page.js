export async function generateMetadata({params}) {
  const {blogID} = await params
  return {
    title : `Blog ${blogID}`
  }
}

const Blog = async ({params}) => {
    const {blogID} = await params
  return (
    <div>Blog : {blogID}</div>
  )
}

export default Blog