export const metadata = {
  title : {
    absolute : 'My Files'
  }
}

export default async function File({params}) {
    const {filePath} = await params
  return (
    <div>Files : {filePath?.join('/')}</div>
  )
}
