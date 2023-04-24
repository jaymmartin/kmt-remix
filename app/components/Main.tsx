interface MainProps {
  children: React.ReactNode
}


export default function Main(props: MainProps) {
  return <>
  {/* <div className="fixed top-36 right-0 p-8 m-2 rounded-2xl bg-zinc-400">Book now!</div> */}
  <div className="w-full lg:w-max lg:mx-auto lg:px-2 rounded-lg bg-zinc-500 dark:bg-white text-white dark:text-black text-center py-1 mb-5">Call or email me to schedule a free 15 minute consultation. </div>

  <div className="flex justify-center">
    <div className="max-w-screen-lg">
      {props.children}
    </div>
  </div>
  </>
}