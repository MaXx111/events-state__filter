import { v4 } from 'uuid'

function ProjectList({projects}) {
  
        return (
          <>
            {projects.map(item => {
                 const id = v4();
                 return <img key={id} className="projects__item" src={item.img}/>
            })}
        </>
        )
  }

  export default ProjectList