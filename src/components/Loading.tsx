const Loading = ({loading}) => {
    if (!loading) return null;
  
    return (
      <div className="loading">Loading...</div>
    )
}

export default Loading;