import WorkItemInput from "./components/WorkItemInput"
import Worklogs from "./components/Worklogs"
import useHandleTickets from "./hooks/useHandleTickets"


const App = () => {

const {newTicket, backLogs, inProgress, completed, handleTicketInputChange, handleAddNewTicket, handleDragStart, handleDragEnter, handleDragOver, handleDrop} = useHandleTickets()
// console.log('app rendering')

  return (
  <div className="mx-auto my-6 max-w-[800px] text-center">
      <h2 className="text-5xl my-4 font-semibold">Agile board</h2>

      <WorkItemInput className='my-8' newTicket = {newTicket} handleTicketInputChange={handleTicketInputChange} handleAddNewTicket= {handleAddNewTicket}/>
      <Worklogs className='my-8' backLogs={backLogs} inProgress = {inProgress} completed = {completed} handleDragEnter={handleDragEnter} handleDragOver={handleDragOver} handleDragStart={handleDragStart} handleDrop={handleDrop}/>
    </div>
  )
}

export default App