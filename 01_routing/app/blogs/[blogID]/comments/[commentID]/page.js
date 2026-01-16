export default async function Comment({params}) {
    const paramsObj = await params
    const {blogID, commentID} = paramsObj
  return (
    <div>Comment of blog ID : {blogID}, Comment No. {commentID}</div>
  )
}
