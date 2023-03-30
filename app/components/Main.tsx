interface MainProps {
  children: React.ReactNode
}


export default function Main(props: MainProps) {
  return <div className="flex justify-center">
    <div className="max-w-screen-lg">
      {props.children}
    </div>
  </div>
}