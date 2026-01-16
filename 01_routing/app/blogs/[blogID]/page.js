const Blog = async ({params}) => {
    const {blogID} = await params
  return (
    <div>Blog : {blogID}</div>
  )
}

export default Blog