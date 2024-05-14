import React from 'react'

type Props = {
    className: string,
    newTicket: string
    handleTicketInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleAddNewTicket: (value: string) => void
}


const WorkItemInput = ({ className, newTicket, handleTicketInputChange, handleAddNewTicket }: Props) => {
    

    return (
        <div className={className}>
            <div className='flex gap-3 items-center justify-center'>
                <input className='border-2 enabled:border-black p-2 rounded-md h-[40px] grow'
                    type='text'
                    placeholder='Enter new ticket'
                    onChange={handleTicketInputChange}
                    value={newTicket} />
                <button onClick={() => handleAddNewTicket(newTicket)} className='bg-blue-500 h-[40px] py-2 px-3 text-white rounded-md hover:bg-blue-700 '>Add Ticket</button>
            </div>
        </div>
    )
}

export default WorkItemInput