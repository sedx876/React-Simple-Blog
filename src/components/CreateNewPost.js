import React from 'react'


const CreateNewPost = () => {

  return(
    <>
      <form>
        <h1>Create New Post</h1>
        <input type='text' placeholder='title' size='39' required></input>
        <br/>
        <br/>
        <textarea placeholder='contents' rows='8' cols='41' required></textarea>
        <br/>
        <br/>
        <button>Save Post</button>
      </form>
    </>
  )
}

export default CreateNewPost 