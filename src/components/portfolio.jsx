import data from '../data'
import { useState } from 'react'
import Toolbar from './toolbar'
import ProjectList from './project-list'

function Portfolio() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [activeFilter, setActifeFilter] = useState('All');
    const [projects, setProjects] = useState(data);
    const projectsAll = data;
  
    const selectHandler = filter => {
      setActifeFilter(filter);
  
      if(filter == "All") {
        setProjects(projectsAll);
        return
      }
  
      setProjects(projectsAll.filter(item => item.category == filter));
  
    }
  
    return (
      <>
        <div className="portfolio">
          <Toolbar 
          filters={filters}
          selected={activeFilter}
          onSelectFilter={selectHandler}/>
  
          <div className="projects">    
            <ProjectList projects={projects}/> 
          </div>
        </div>
      </>
    )
  }

  export default Portfolio