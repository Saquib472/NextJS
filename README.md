# Next.js

## What is Next.js?

- **React-based Open-Source Full-Stack Framework**: For building fast, production-ready web.
- **Hybrid Rendering**: SSR, SSG, ISR, CSR support.
- **Developer-friendly**: Simplified routing, built-in optimizations.
- **Developed By**: Vercel

---

## Key Features

- **File-based Routing**: Routes match file structure.
- **Image Optimization**: Lazy loading, resizing, WebP support.
- **API Routes**: Backend capabilities within the app.
- **SSR**: Server-rendered pages for SEO and speed.
- **SSG**: Static content at build time.
- **ISR**: Update static pages without full rebuilds.
- **CSR**: UI interaction
- **CSS/Sass Support**: Global styles, CSS modules.
- **TypeScript**: Built-in support.
- **Middleware**: Pre-render logic.
- **Edge/Serverless Deployment**: Scalable, fast.

---

## Benefits

- **SEO Optimized**: Pre-rendered pages for better indexing.
- **Fast Performance**: Faster TTFB, lazy loading.
- **Better UX**: Seamless navigation, Fast Refresh.
- **Scalable**: Hybrid rendering, serverless-ready.
- **Developer Productivity**: Easy setup, rich ecosystem.
- **Flexibility**: Custom configs, headless CMS support.
- **Rich Ecosystem**: Large community, React compatibility.

---

## Use Cases

- **E-commerce**: SEO, fast loading boosts conversions.
- **Content Sites**: Blogs, docs with SSG/ISR.
- **Enterprise Apps**: Scalable with APIs and hybrid rendering.
- **Real-time Apps**: SSR + CSR for interactivity.

---

## Conclusion

Next.js = Fast, flexible, production-ready React framework. Ideal for SEO, performance, and scalable web apps.

---

## Create a Next js App

 - npx create-next-app@latest 01_routing

 ---

# 02_all_routings

## Routing 
- Folder based routing.

---

## Nested Routing
- Create folder inside another folder with page.tsx file. Check blog folder.

---

## Dynamic Routing
- Create Folder using []. example - Check `[productId]` inside products folder.

---

## Nested Dynamic Routing
- Create Folder inside Dynamic Folder. example - check `[productId]` > reviews > `[reviewId]`

---

## Catch All Segments
- To Catch all the routing Next Provide something like this -> check docs > [[...slug]] (It is called Optional) OR [...slug].

---

## Not Found Page
- Create not-found.tsx for global inside the app. 
- If user want route specific then create same in the route folder.
- use notFound function by importing from next/navigation and call this where required.
- NotFound component can't accept parameters.
- Use usePathName hook, import it from next/navigation.
- const pathName = usePathName()
- Hooks can be used only if the component is Client Component So "use client" add it to the top.
- Check the not-found.tsx And check not-found.tsx from products > reviews.

---

## File Colocation 
- As Folders are used for routing but it must include a page.tsx file. And it must be default export.
- That means the components can be create in folder without worring as it can't render to the UI.
- Check dashboard folder.

---

## Private Folders
- Use UnderScore before folder and it became private folder which can't be render in the UI.
- It use to sparate the code logic with routes.
- Check _lib

---

## Route Groups
- Create Folder like this - (auth) And Move all the Authentication related folders into it without woorying about the routing as Nextjs treat the folder as a Organizational tool only excluidng the routing paths. 

---

## Layouts 
- Pages are route specific UI Components.
- A layout is UI that is shared between multiple pages in your app. 
- Example - Header And Footer
- Default export a React Component from a layout.js or layout.tsx file.
- That component takes a children prop, which Next.js will populate with your page content.
- Check layout.tsx

---

## Nested Layouts
- We can create layouts for specific page.
- Check folder products > [productId] > layout.tsx

---

# 03_multiple_root_layouts

## Multiple Root Layouts
- Check the 03_multiple_root_layouts folder.
- Separting Layouts to different routs.
- using Route Groups.

---

## Routing Metadata
