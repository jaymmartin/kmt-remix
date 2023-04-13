import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main';

export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - About",
    description:
      "About the experience, specialities, and issues provided by Kate Martin Therapy.",
    "og:image": "https://katemartintherapy.com/images/brittany.webp",
    "og-url": "https://katemartintherapy.com/about",
  };
};

export default function About() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between space-y-3 md:space-y-0 mt-6">
        <div className="basis-full md:basis-5/12">
          <img className="object-cover h-72 md:h-fit w-full rounded-xl" src="images/kate.webp" alt="Kate Martin smiling"/>
        </div>
        <div className="basis-full md:basis-6/12">
          
      <h1 className="font-bold text-3xl mb-6">About</h1>
          <div className="mb-3">Kate Martin, LPC</div>
          <ul className="mb-3">
            <li>Clinically licensed therapist in New Jersey</li>
            <li>MA, Kean University</li>
            <li>BA, Duke University</li>
          </ul>
          <div className="space-y-4">
            <div>Kate works with clients interested in:</div>
            <UnorderedList>
              <li>Coping with anxiety, anger, and sadness</li>
              <li>Managing stress at home, work, and school</li>
              <li>Improving the quality of their lives and relationships with others</li>
              <li>Developing effective communication and the ability to advocate for themselves</li>
              <li>Parenting strategies, skills, and support</li>
              <li>Navigating life transitions and changes</li>
              <li>Exploring body image and relationships with food</li>
              <li>Understanding themselves and their connection to others</li>
              <li>LGBTQIA+ issues and experiences</li>
              <li>Practicing self-compassion and building confidence</li>
              <li>Learning practical skills for managing time and responsibilities</li>
              <li>Finding ways to invite joy and peace into their lives</li>
            </UnorderedList>
            <div>Kate Martin Therapy is an inclusive practice welcoming clients of all backgrounds, races, ethnic identities, countries of origin, genders, sexual orientations, faiths, abilities, and bodies.</div>
          </div>
        </div>
      </div>
    </Main>
  );
}
