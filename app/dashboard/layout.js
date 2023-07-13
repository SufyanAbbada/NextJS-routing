export default function DashboardLayout(props) {
  return (
    <div>
      {props.children}
      {props.shirts}
      {props.pants}
    </div>
  )
}
