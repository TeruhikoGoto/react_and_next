export default function MyImage(props) {
  let fname = './' + props.fname
  let size = props.size + "px"

  return (
    <img src={fname} width={size} border="1" />
  )
}
