
import type { V2_MetaFunction } from "@remix-run/node";
import Main from '../components/Main'
import Image from '../components/Image'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kate Martin Therapy - Telehealth Therapy for NJ" },
    { name:"description", content: "Kate Martin Therapy provides telehealth therapy sessions to patients in New Jersey." },
    { property:"og:image", content:"https://katemartintherapy.com/images/garcia.webp"},
    { property:"og-url", content: "https://katemartintherapy.com"},
  ];
};

export default function Index() {
  return (
    <Main>
      <h1 className="text-center md:text-xl mt-6">
        Providing Services to Clients Throughout New Jersey
      </h1>

      <h2 className="text-center md:text-xl mt-6 mb-6">
        Flexible Online, Phone, and Walk-and-Talk Appointment Options for Your Comfort and Convenience
      </h2>

      <div>
        <Image src="images/garcia.webp" alt="Sunset sky over mountainous valley covered with lush vegetation" title="Sunset sky over mountainous valley covered with lush vegetation" author="Vanessa Garcia" originalLink="https://www.pexels.com/photo/sunset-sky-over-mountainous-valley-covered-with-lush-vegetation-6324136/" />
        {/* <Image src="images/marta.jpg" alt="Calm lake surrounded by autumn trees" title="Calm lake surrounded by autumn trees" author="Marta Wave" originalLink="https://www.pexels.com/photo/calm-lake-surrounded-by-autumn-trees-5876642/" /> */}
      </div>
    </Main>
  );
}
