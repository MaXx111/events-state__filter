function Tool({filter, handler, disable}) {
    
    return (
      <>
        <button onClick={() => handler(filter)} disabled={disable}>{filter}</button>
      </>
    )
  }

  export default Tool