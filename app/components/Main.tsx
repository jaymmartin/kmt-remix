interface MainProps {
  children: React.ReactNode
}

function Starburst() {
  return <div className="w-full lg:w-max lg:mx-auto lg:px-2 rounded-lg border-2 border-black border-solid dark:border-white text-center py-1 mb-5">
    <a className="underline" href="tel:6463971025">Call</a> or <a className="underline" href="mailto:info@katemartintherapy.com" target="_blank" rel="noopener noreferrer">Email</a> for a Free 15 Minute Consultation
  </div>
}

export default function Main(props: MainProps) {
  return <>
    {/* <div className="fixed top-36 right-0 p-8 m-2 rounded-2xl bg-zinc-400">Book now!</div> */}
    <Starburst />

    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        {props.children}
      </div>
    </div>
  </>
}