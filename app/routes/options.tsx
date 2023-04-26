import type { MetaFunction } from "@remix-run/node";
import Main from '../components/Main'
import Image from '../components/Image'

export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Options",
    description:
      "Kate Martin Therapy provides virtual and walk and talk sessions for clients",
    "og:image": "https://katemartintherapy.com/images/tran.webp",
    "og-url": "https://katemartintherapy.com/services",
  };
};

export default function Options() {
  return (
    <Main>
      <div className="flex flex-wrap justify-between">
        <div className="basis-full md:basis-6/12">
          <Image src="images/tran.webp" alt="Paved path through woods" title="Photography of Road Between Forest" originalLink="https://www.pexels.com/photo/photography-of-road-between-forest-730541/" author="Thach Tran" />
        </div>
        <div className="basis-full md:basis-5/12">
          <h2 className="font-bold text-3xl mb-2">Options</h2>
          <div className="mb-4 md:mb-8">Flexible <span className="font-bold">online</span>, <span className="font-bold">phone</span>, and <span className="font-bold">walk-and-talk</span> appointment options are available for your comfort and convenience.</div>
          <div className="mb-4 md:mb-8">
            <h3 className="font-bold text-xl mb-2">Online/Phone</h3>
            Online or phone appointments allow you to engage in session from the comfort of your home.
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-xl mb-2">Walk-and-Talk</h3>
              We meet outside and walk for session. A simple alternative to the traditional office session, many clients find it more comfortable to walk alongside each other than to sit face-to-face.
            </div>
            <div>
              <h4 className="font-bold text-l">What about bad weather?</h4>
              Not a problem. If you would like to walk and talk, a warm coat or umbrella works just fine! As Alfred Wainwright said, “There's no such thing as bad weather, just unsuitable clothing.”
            </div>
            <div>
              <h4 className="font-bold text-l">Is this a workout?</h4>
              No. This is slow or moderate walking - not a workout, not fast walking. There is nothing physically strenuous about the session.
            </div>
            <div>
              <h4 className="font-bold text-l">What are the benefits of walk and talk therapy?</h4>
              Gentle bilateral movement in a natural outdoor setting - a literal walk in the park - produces physiological and psychological relaxation, reduces stress, and promotes feelings of well being. For people who feel stuck, walk-and-talk sessions can facilitate forward movement and momentum and the ability to see new perspectives.
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}