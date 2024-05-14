
type WorklogsProps = {
  className : string,
  backLogs: string[],
  completed: string[],
  inProgress: string[],
  handleDragStart : (e: React.DragEvent, value: string, sourceLogValue: string) => void
  handleDragEnter : (e: React.DragEvent) => void
  handleDrop : (e: React.DragEvent, targetLog: string) => void
  handleDragOver : (e: React.DragEvent) => void
  
}

interface WorklogProps {
  logHeading: string,
  items: string[],
  handleDragStart : (e: React.DragEvent, value: string, sourceLogValue: string) => void
  handleDragEnter : (e: React.DragEvent) => void
  handleDrop : (e: React.DragEvent, targetLog: string) => void
  handleDragOver : (e: React.DragEvent) => void
}

const Worklog = ({ logHeading, items, handleDrop, handleDragEnter, handleDragOver, handleDragStart }: WorklogProps) => {

console.log('worklog rendering')



  return (
    <div className='p-3 rounded-md bg-neutral-300 min-h-[200px] w-1/3'
         onDrop={(e)=>handleDrop(e, logHeading)}
         onDragOver={handleDragOver}
         onDragEnter={handleDragEnter}

         >
      <h2 className='text-3xl font-medium mb-3'>{logHeading}</h2>
      {items?.map((item, index) => (
        <div key={index}
             className='p-1 bg-white text-black rounded-lg my-2 text-lg cursor-move'
             draggable
             onDragStart={(e)=>{handleDragStart(e, item, logHeading)}}
             >
          {item}
        </div>
      ))
      }
    </div>
  )
}

const Worklogs = ({ className, backLogs, inProgress, completed,  handleDragStart, handleDragEnter, handleDragOver, handleDrop}: WorklogsProps) => {

// console.log('worklogs rendering')

  return (
    <div className={className}>
      <div className='flex items-start justify-center gap-2'>
        <Worklog logHeading='Backlogs' items={backLogs} handleDragStart = {handleDragStart} handleDragEnter = {handleDragEnter} handleDragOver = {handleDragOver} handleDrop = {handleDrop}  />
        <Worklog logHeading='In progress' items={inProgress} handleDragStart = {handleDragStart} handleDragEnter = {handleDragEnter} handleDragOver = {handleDragOver} handleDrop = {handleDrop} />
        <Worklog logHeading='Completed' items={completed} handleDragStart = {handleDragStart} handleDragEnter = {handleDragEnter} handleDragOver = {handleDragOver} handleDrop = {handleDrop} />
      </div>
    </div>
  )
}

export default Worklogs;