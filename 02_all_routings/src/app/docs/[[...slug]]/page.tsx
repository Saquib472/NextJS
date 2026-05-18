export default async function Docs({params} : { params : Promise<{ slug : string[]}> }) {
    const {slug} =await params
  return (
    <div>
        {
            slug?.length === 2 ? <h1>Viewing docs for Feature {slug[0]} And Concept {slug[1]}</h1> : 
                slug?.length === 1 ? <h1>Viewing docs for Feature {slug[0]}</h1> : <h1>Docs Home Page</h1>
        }
    </div>
  )
}
