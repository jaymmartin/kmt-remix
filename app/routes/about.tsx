import type { MetaFunction } from "@remix-run/node";

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
    <div id="main">
      <div id="content">
        <h1>About</h1>
        <div>
          Kate Martin, LPC <br /><br />
          Clinically licensed therapist in New Jersey<br />
          MA, Kean University<br />
          BA, Duke University<br /><br />

          Kate works with clients interested in:
          <ul className="list">
            <li >Coping with anxiety, anger, and sadness</li>
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
          </ul>
          Kate Martin Therapy is an inclusive practice welcoming clients of all backgrounds, races, ethnic identities, countries of origin, genders, sexual orientations, faiths, abilities, and bodies.
        </div>
      </div>
    </div>
  );
}
