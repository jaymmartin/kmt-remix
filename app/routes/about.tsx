import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main';

export const meta = () => {
  return [
    { title: "Kate Martin Therapy - About" },
    { name: "description", content: "About the experience, specialities, and issues provided by Kate Martin Therapy." },
    { property: "og:image", content: "https://katemartintherapy.com/images/kate.webp" },
    { property: "og-url", content: "https://katemartintherapy.com/about" },
  ];
};

export default function About() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between space-y-3 md:space-y-0 mt-6">
        <div className="basis-full md:basis-5/12">
          <img className="object-contain md:object-cover md:max-h-96 h-full w-full rounded-xl" src="images/kate.webp" alt="Kate Martin smiling" />
        </div>
        <div className="basis-full md:basis-6/12">

          <h1 className="font-bold text-3xl mb-6">About</h1>
          <div className="mb-0">Kate Martin, LPC</div>
          <ul className="mb-3">
            <li>MA, Kean University</li>
            <li>BA, Duke University</li>
          </ul>
          <div className="space-y-4">
            <div>I provide clinically licensed psychotherapy, counseling, and parenting consultation services to clients throughout New Jersey.</div>

            <div>I use an integrative approach in order to tailor evidence-based treatment methods to each individual's unique strengths, needs, and context. My therapy style is approachable, warm, and insightful.</div>

            <div>Kate Martin Therapy is an inclusive practice welcoming clients of all backgrounds, races, ethnic identities, countries of origin, genders, sexual orientations, faiths, abilities, and bodies.</div>
          </div>
        </div>
      </div>
    </Main>
  );
}
