import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Kate Martin Therapy - Services",
    description:
    "Kate Martin Therapy provides virtual and walk and talk sessions for clients",
    "og:image": "https://katemartintherapy.com/images/tran.webp",
    "og-url": "https://katemartintherapy.com/services",
  };
};

export default function About() {
  return (
    <div id="main">
      <div id="content" >
        <div style={{ display: "flex" }}>
        <div style={{ maxWidth: "60%", paddingRight: "3em" }}>
          <img style={{ maxWidth: "100%" }} src="images/tran.webp" />
        </div>
        <div>
          <h1>Services</h1>
          <div>
            <h2>Getting Started</h2>
            It's okay if you don't know where to start. If there is something in your life that is concerning or
            confusing to you, we can discuss it together. Sessions provide you with the time and space to be
            yourself in a nonjudgmental and supportive environment.
          </div>
        </div>
        </div>
        <div style={{marginTop: "1em"}}>
          <h2>Appointment Options</h2>
          <br />
          <div>
            <h3>Virtual Sessions</h3>
            Virtual appointments via video or phone allow you to engage in session from the comfort of your
            home.
          </div>
          <br />
          <div>
            <h3>Walk and Talk</h3>
            We meet outside and walk for session. A simple alternative to the traditional office session,
            many
            clients find it more comfortable to walk alongside each other than to sit face-to-face.
            <br />
            <br />
            <h4>What about bad weather?</h4>
            Not a problem. If you would like to walk and talk, a warm coat or umbrella works just fine! As
            Alfred
            Wainwright said, “There's no such thing as bad weather, just unsuitable clothing.”
            <br />
            <br />
            <h4>Is this a workout?</h4>
            No. This is slow or moderate walking - not a workout, not fast walking. There is nothing
            physically
            strenuous about the session.
            <br />
            <br />
            <h4>What are the benefits of walk and talk therapy?</h4>
            Gentle bilateral movement in a natural outdoor setting - a literal walk in the park - produces
            physiological and psychological relaxation, reduces stress, and promotes feelings of well being.
          </div>
        </div>
      </div>
    </div>
  );
}