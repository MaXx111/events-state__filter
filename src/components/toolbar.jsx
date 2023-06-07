import Tool from './tool'
import { v4 } from 'uuid'

function Toolbar({filters, selected, onSelectFilter}) {

        return (
          <>
          <div className="toolbar">
            {filters.map(item => {
                const id = v4();
                return <Tool key={id} filter={item} handler={onSelectFilter} disable={item == selected}/>
            })}
          </div>
        </>
        )
  }

  export default Toolbar