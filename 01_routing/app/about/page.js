import Link from "next/link";

export const metadata = {
  title : "About"
}

export default function About() {
  return (
    <div>
        <h1 className="">About Page</h1>
        <Link href='/'>Home</Link>
    </div>
  )
}
