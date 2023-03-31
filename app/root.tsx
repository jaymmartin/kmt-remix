import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from 'app/components/Navbar'
import Footer from 'app/components/Footer'



export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kate Martin Therapy - Telehealth Therapy for NJ",
  viewport: "width=device-width,initial-scale=1",
  "og-type": "website"
});

import styles from "./tailwind.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin:"anonymous"},
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope&display=swap"},

    //favicons
    { rel: "apple-touch-icon", sizes:"180x180", href: "/apple-touch-icon.png"},
    { rel: "icon", type:"image/png", sizes:"32x32", href: "/favicon-32x32.png"},
    { rel: "icon", type:"image/png", sizes:"16x16", href: "/favicon-16x16.png"},
    { rel: "manifest", href: "/site.webmanifest"}
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans mx-4 flex flex-col h-screen">
        <Navbar />
        <div className="grow"><Outlet /></div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
