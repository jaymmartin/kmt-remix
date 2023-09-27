
import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main'
import Image from '../components/Image'


export const meta = () => {
  return [
    {title: "Kate Martin Therapy - Work With Me"},
    {name:"description", content:"Details about concerns and personalization related therapy by Kate Martin Therapy."},
  ];
};

export default function Work() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between items-center space-y-3 md:space-y-0 mt-6">
        <div className="basis-full md:basis-6/12">
          <Image className="aspect-[5/4]" src="images/bernotti.webp" alt="Body of Water and Mountain Photography" title="Body of Water and Mountain Photography" author="Maria Isabella Bernotti" originalLink="https://www.pexels.com/photo/body-of-water-and-mountain-photography-1076130/" />
        </div>
        <div className="basis-full md:basis-5/12">

          <h1 className="font-bold text-3xl mb-6">Work With Me</h1>

          <div className="space-y-4">
            <div><span className="font-bold">It's okay if you don't know where to start</span>. If there is something in your life that is concerning or confusing to you, we can discuss it together. Sessions provide you with the time and space to be yourself in a <span className="font-bold">nonjudgmental and supportive environment</span>.</div>
            <div>I will listen to you to learn about your experience and <span className="font-bold">understand your perspective</span>. I will work collaboratively with you to explore options and assess <span className="font-bold">what feels most helpful for you</span>.</div>
            <div>I value meeting each individual <span className="font-bold">“where they are”</span> at this moment in time so that our work together is manageable and thus productive.</div>
            <div>
              Many clients find it helpful to work with me to <span className="font-bold">learn and practice new skills</span> and develop a plan that <span className="font-bold">feels accessible</span> in order to apply the work we do in session to everyday, real life.
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}