
import type { MetaFunction } from "@remix-run/node";
import Main from '../components/Main'

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
      <h1 className="font-bold text-l md:text-xl lg:text-2xl mb-3 md:mb-8 lg:mb-12">New Jersey Psychotherapy and Counseling</h1>
      <Main>
        <div id="banner">
          <img className="rounded-xl" width="800" src="images/brittany.webp" alt="Grass in front of sunset" />
        </div>
      </Main>
    </>
  );
}
