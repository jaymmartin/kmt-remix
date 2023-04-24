
import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main'
import Image from '../components/Image'


export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Parenting",
    description:
      "Details about parenting related therapyby Kate Martin Therapy.",
  };
};

export default function Work() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between space-y-3 md:space-y-0 mt-6">
        <div className="basis-full md:basis-5/12">
          <img className="object-cover h-72 md:h-fit w-full rounded-xl" src="images/kate.webp" alt="Kate Martin smiling" />
        </div>
        <div className="basis-full md:basis-6/12">

          <h1 className="font-bold text-3xl mb-6">Work with Me</h1>

          <div className="space-y-4">
            <div>It's okay if you don't know where to start. If there is something in your life that is concerning or confusing to you, we can discuss it together. Sessions provide you with the time and space to be yourself in a nonjudgmental and supportive environment. </div>
            <div>I will listen to you to learn about your experience and understand your perspective. I will work collaboratively with you to explore options and assess what feels most helpful for you.</div>
            <div>I value meeting each individual “where they are” at this moment in time so that our work together is manageable and thus productive.</div>
          </div>
        </div>
      </div>
    </Main>
  );
}