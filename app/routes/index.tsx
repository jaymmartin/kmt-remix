
import type { MetaFunction } from "@remix-run/node";
import Main from '../components/Main'

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
    <Main>
      <div id="banner">
        <img className="rounded-xl" width="800" src="images/brittany.webp" alt="Grass in front of sunset" />
      </div>
    </Main>
  );
}
