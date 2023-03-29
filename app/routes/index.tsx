
import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno

/*
<meta property="og:title" content="Kate Martin Therapy - Telehealth Therapy for NJ">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.katemartintherapy.com">
    <meta property="og:description"
        content="Kate Martin Therapy provides virtual telehealth therapy to clients in New Jersey.">
        */
export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Telehealth Therapy for NJ",
    description:
      "Kate Martin Therapy provides telehealth therapy sessions to patients in New Jersey.",
    "og:image": "https://katemartintherapy.com/images/brittany.webp",
    "og-url": "https://katemartintherapy.com",
  };
};

export default function Index() {
  return (
    <>
      <h2 style={{ marginLeft: ".5em" }}>New Jersey Psychotherapy and Counseling</h2>
      <div id="main">
        <div id="content">
          <div id="banner">
            <img width="800" src="images/brittany.webp" alt="Grass in front of sunset" />
          </div>
        </div>
      </div>
    </>
  );
}
