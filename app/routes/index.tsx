
import type { MetaFunction } from "@remix-run/node";
import Main from '../components/Main'
import Image from '../components/Image'

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
      <div className="text-center text-xl mt-6 mb-6">Flexible online, phone, and walk-and-talk appointment options available for your comfort and convenience</div>
      <div>
        <Image src="images/brittany.webp" alt="Grass in front of sunset" title="Silhouette of Grasses Against the Light of Setting Sun" author="brittany" originalLink="https://www.pexels.com/photo/silhouette-of-grasses-against-the-light-of-setting-sun-87812/" />
      </div>
    </Main>
  );
}
