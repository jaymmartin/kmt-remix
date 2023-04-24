
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

export default function Parenting() {
  return (
    <Main>
 <div className="flex flex-wrap justify-between space-y-3 md:space-y-0 mt-6">
        <div className="basis-full md:basis-5/12">
          <img className="object-cover object-top h-72 md:h-fit w-full rounded-xl" src="images/kate.webp" alt="Kate Martin smiling"/>
        </div>
        <div className="basis-full md:basis-6/12">
          
      <h1 className="font-bold text-3xl mb-6">Parenting</h1>
         
          <div className="space-y-4">
            <div>Parents and caregivers work with me to learn <span className="font-bold">practical ways</span> to establish and maintain <span className="font-bold">functional communication</span>, engage their children's and loved ones' <span className="font-bold">cooperation</span>, nurture <span className="font-bold">healthy family relationships</span>, and create a life at home that is <span className="font-bold">fulfilling, rewarding, and sustainable</span>.</div>

            <div>My approach to parenting prioritizes and strengthens the parent-child relationship.</div>
          </div>
        </div>
      </div>
    </Main>
  );
}