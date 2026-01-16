# Routing 

## Basic Routing
- Routing in Next JS is File Structured Routing.
- Create a folder eg. about > Inside this folder create page.js
- **To Use Link**: import Link from "next/link"; > `<Link href='/'>about</Link>` 

---

## Nested Routing

- For Nested Routing create subfolder inside one folder.
- eg. services > web-dev , services > app-dev
- Inside services > `<Link href='/services/web-dev'>Web Development</Link>`

## Dynamic Routing

- For Dynamic Routing create a folder or subfolder inside one folder.
- eg. blogs > `[blog]`
- **Keywords**: props, await params, searchparams > returns a Promise.

## Nested Dynamic Routing

- For Nested Dynamic Routing create a folder inside dynamic folder.
- eg. `[blogID]` > comments > `[commentID]`
- Inside commentID can access its parant params.