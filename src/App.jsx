import { useState } from 'react'
import './App.css'
import data from './data.js';

function App() {

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App

function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [activeFilter, setActifeFilter] = useState('All');
  const [projects, setProjects] = useState(data);
  const projectsAll = data;

  const selectHandler = e => {
    let filter = e.target.getAttribute(`data`);
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
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={activeFilter}
        onSelectFilter={selectHandler}/>

        <div className="projects">    
          <ProjectList projects={projects}/> 
        </div>
      </div>
    </>
  )
}

function Toolbar({filters, selected, onSelectFilter}) {
  const data = filters;
  let res = data.map(function(item) {
  const disable = item == selected;

   return <Tool filter={item} handler={onSelectFilter} disable={disable}/>
  });

      return (
        <>
        <div className="toolbar">
          {res}
        </div>
      </>
      )
}

function Tool({filter, handler, disable}) {
  return (
    <>
      <button onClick={handler} disabled={disable} data={filter}>{filter}</button>
    </>
  )
}


function ProjectList({projects}) {
  let res = projects.map(function(item) {
   return <img className="projects__item" src={item.img}/>
  });

      return (
        <>
          {res}
      </>
      )
}