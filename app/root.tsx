import type {  SerializeFrom } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import { ExternalScripts, ExternalScriptsFunction } from "remix-utils/external-scripts";
import Navbar from 'app/components/Navbar'
import Footer from 'app/components/Footer'



export const meta = () => {
  return [
    {title: "Kate Martin Therapy - Telehealth Therapy for NJ"},
    { property:"og-type", content:"website"},
  ];
};

import styles from "./tailwind.css";
import { SyntheticEvent } from "react";

function removePrint(element: SyntheticEvent) {
  if (element.target && element.target instanceof HTMLElement)
    element.target.removeAttribute('media');
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700&display=swap", onLoad: removePrint, media:'print' },

    //favicons
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
}

// let scripts: ExternalScriptsFunction = ({ id, data, params, location, parentsData, }) => {
//   const prodScripts: any[] = [
//     { src: 'https://static.cloudflareinsights.com/beacon.min.js', "data-cf-beacon": '{"token": "5dd3b98004e4423d9d9b772d09a6e688"}', defer: "defer" },
//   ];
//   const devScripts: any[] = [];
//   const allScripts: any[] = [];

//   if (process.env.NODE_ENV === "development")
//     return devScripts.concat(allScripts);

//   return prodScripts.concat(allScripts);
// };

// // and export it through the handle, you could also create it inline here
// // if you don't care about the type
// export let handle = { scripts };

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="font-sans mx-4 flex flex-col h-screen dark:bg-zinc-800 dark:text-zinc-300">
        <Navbar />
        <div className="grow"><Outlet /></div>
        <Footer />
        <ScrollRestoration />
        {/* <ExternalScripts /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
