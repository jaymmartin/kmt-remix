interface UnorderedListProps {
  children: React.ReactNode
}

export default function UnorderedList(props: UnorderedListProps) {
  return <ul className="list-disc list-outside ml-6">
      {props.children}
    </ul>
}