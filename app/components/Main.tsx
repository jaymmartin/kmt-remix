interface MainProps {
  children: React.ReactNode
}

function Starburst() {
  return <div className="w-full lg:w-max lg:mx-auto lg:px-2 rounded-lg bg-zinc-500 dark:bg-white text-white dark:text-black text-center py-1 mb-5">
    <a href="tel:6463971025">Call</a> or <a href="mailto:info@katemartintherapy.com" target="_blank" rel="noopener noreferrer">email</a> me to schedule a free 15 minute consultation.
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