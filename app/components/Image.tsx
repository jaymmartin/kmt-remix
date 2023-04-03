interface ImageProps {
  src: string,
  alt: string,
  classNames?: string,
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

export default function Image(props: ImageProps) {
  props = { ...defaultProps, ...props };

  let licenseLink = <a href={props.licenseLink}>{props.license} License</a>;
  let title = <>{'"'+props.title+'" '}</>;
  if (props.originalLink)
    title = <a href={props.originalLink} target="_blank">{title} </a>

  let author = "";
  if (props.author)
    author = "by " + props.author + " "

  return <div className="">
    <img className="rounded-xl max-w-4xl w-full" src={props.src} alt={props.alt} />
    <div className="text-gray-400 text-[7px] md:text-[9px] text-end">
      {title}
      {author}
      {licenseLink}
    </div>
  </div>
}