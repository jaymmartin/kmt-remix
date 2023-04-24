import type { MetaFunction } from "@remix-run/node";
import Main from '../components/Main'
import Image from '../components/Image'

export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Services",
    description:
      "Kate Martin Therapy provides virtual and walk and talk sessions for clients",
    "og:image": "https://katemartintherapy.com/images/tran.webp",
    "og-url": "https://katemartintherapy.com/services",
  };
};

export default function Services() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between">
        <div className="basis-full md:basis-6/12">
          <Image src="images/tran.webp" alt="Paved path through woods" title="Photography of Road Between Forest" originalLink="https://www.pexels.com/photo/photography-of-road-between-forest-730541/" author="Thach Tran"/>
        </div>
        <div className="basis-full md:basis-5/12">
          <h1 className="font-bold text-3xl mb-6">Services</h1>
          <div>
            <p className="mt-3">
              I help people <span className="font-bold">cope with difficult situations</span> and learn ways to <span className="font-bold">manage stress</span> at home, work, or school.
            </p>

            <p className="mt-3">
              People work with me to develop <span className="font-bold">effective communication skills</span> and the <span className="font-bold">ability to advocate</span> for themselves, their needs, and their interests. My clients find more <span className="font-bold">meaning, purpose, and connection</span> in their day-to-day lives by better <span className="font-bold">understanding themselves</span> and their capacity for <span className="font-bold">self-compassion, peace, and joy</span>.
            </p>
            <p className="mt-3">
              I also help people learn practical skills for <span className="font-bold">managing time and responsibilities</span>, navigate <span className="font-bold">life transitions and changes</span>, explore <span className="font-bold">body image and relationships with food</span>, and process <span className="font-bold">LGBTQIA+ issues and experiences</span>.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="basis-full mt-4">
        <h2 className="font-bold text-2xl mb-4 md:mb-8">Appointment Options</h2>
        <div className="mb-4 md:mb-8">
          <h3 className="font-bold text-xl mb-2">Virtual Sessions</h3>
          Virtual appointments via video or phone allow you to engage in session from the comfort of your
          home.
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Walk and Talk</h3>
          We meet outside and walk for session. A simple alternative to the traditional office session,
          many clients find it more comfortable to walk alongside each other than to sit face-to-face.
          <br />
          <br />
          <h4 className="font-bold text-l">What about bad weather?</h4>
          Not a problem. If you would like to walk and talk, a warm coat or umbrella works just fine! As
          Alfred Wainwright said, “There's no such thing as bad weather, just unsuitable clothing.”
          <br />
          <br />
          <h4 className="font-bold text-l">Is this a workout?</h4>
          No. This is slow or moderate walking - not a workout, not fast walking. There is nothing
          physically strenuous about the session.
          <br />
          <br />
          <h4 className="font-bold text-l">What are the benefits of walk and talk therapy?</h4>
          Gentle bilateral movement in a natural outdoor setting - a literal walk in the park - produces
          physiological and psychological relaxation, reduces stress, and promotes feelings of well being.
        </div>
      </div> */}
    </Main>
  );
}