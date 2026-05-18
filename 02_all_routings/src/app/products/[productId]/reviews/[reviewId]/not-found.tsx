"use client"

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathName = usePathname()
    const path = pathName.split("/")
  return (
    <h1>Review {path[4]} for product {path[2]} Not Found</h1>
  )
}
