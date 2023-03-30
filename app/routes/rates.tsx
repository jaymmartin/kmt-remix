import type { MetaFunction } from "@remix-run/node";
import UnorderedList from "~/components/UnorderedList";
import Main from '../components/Main'


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
      <h1>Rates</h1>
      <div>
        Individual session (45 minutes) $180 <br />
        Payment via cash or credit card is due at time of service.
      </div>
      <div>
        <h1>Insurance</h1>
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
    </Main>
  );
}