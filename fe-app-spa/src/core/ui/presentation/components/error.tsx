type ErrorProps = {
  error: unknown
}

function Error(props: ErrorProps) {
  const { error } = props

  return (
    <div>
      <h1>Damn! Something went wrong...</h1>
      <p>{String(error)}</p>
    </div>
  )
}

export default Error
