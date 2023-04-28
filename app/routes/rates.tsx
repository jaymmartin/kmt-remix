import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main'
import Image from '../components/Image'


export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Rates",
    description:
      "The rates for the services provided by Kate Martin Therapy.",
  };
};

export default function Rates() {
  return (
    <Main>

      <div className="flex flex-wrap justify-between space-y-3 md:space-y-0">
        <div className="basis-full md:basis-6/12">
          <Image src="images/tran.webp" alt="Paved path through woods" title="Photography of Road Between Forest" originalLink="https://www.pexels.com/photo/photography-of-road-between-forest-730541/" author="Thach Tran" />
        </div>
        <div className="basis-full md:basis-5/12">
          <h1 className="font-bold text-xl mb-3">Rates</h1>
          <p className="mb-6">
            Individual session (45 minutes) $180 <br />
            Sessions that run longer than 45 minutes are charged for additional time pro-rata. <br /><br />
            Payment via cash or credit card is due at time of service.

          </p>
          <div>
            <h1 className="font-bold text-xl mb-3">Insurance</h1>
            <p className="mb-3">Kate Martin Therapy is an out-of-network provider. We are happy to provide you with an invoice to submit
              to your health plan for reimbursement according to your policy provisions.
            </p>
            <p className="mb-3">
              To determine if you have mental health coverage, ask your insurance carrier the following questions:
            </p>
            <UnorderedList>
              <li>Do I have mental health benefits?</li>
              <li>What is my deductible and has it been met?</li>
              <li>How much does my plan cover for an out-of-network provider?</li>
              <li>How many sessions per calendar year does my plan cover?</li>
              <li>What is the coverage amount per therapy session?</li>
            </UnorderedList>
          </div>
        </div>
      </div>
    </Main>
  );
}