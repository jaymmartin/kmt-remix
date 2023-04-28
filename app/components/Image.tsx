interface ImageProps {
  src: string,
  alt: string,
  className?: string,
  title?: string,
  author?: string,
  originalLink?: string,
  license?: string,
  licenseLink?: string,
}

// .container {
//   width: 300px;
//   position: relative;
// }

// .container img {
//   width: 100%;
// }

// .container h3 {
//   background-color: rgba(0,0,0,0.3);
//   color: #fff;
//   position: absolute;
//   bottom: 0;
//   right: 2px;
// }
const defaultProps = {
  title: "Unknown Title",
  author: "",
  originalLink: "",
  license: "CC 3.0",
  licenseLink: "https://creativecommons.org/licenses/by/3.0/us/legalcode"
}

const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for(let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export default function Image(props: ImageProps) {
  props = { ...defaultProps, ...props };

  let licenseLink = <a href={props.licenseLink}>{props.license} License</a>;
  let title = <>{'"'+props.title+'" '}</>;
  if (props.originalLink)
    title = <a href={props.originalLink} target="_blank">{title} </a>

  let author = "";
  if (props.author)
    author = "by " + props.author + " "

  const id = "img-id-"+cyrb53(props.title)
  return <div className="">
    <img aria-labelledby={id} className={`object-cover rounded-xl max-w-screen-lg w-full m-auto ${props.className}`} src={props.src} alt={props.alt} />
    <div id={id} className="text-gray-400 text-[7px] md:text-[9px] w-full text-end">
      {title}
      {author}
      {licenseLink}
    </div>
  </div>
}