import React, { useState } from 'react'

const useHandleTickets = () => {

    const [newTicket, setNewTicket] = useState('');
    const [backLogs, setBackLogs] = useState<string[]>([]);
    const [inProgress, setInProgress] = useState<string[]>([]);
    const [completed, setCompleted] = useState<string[]>([]);
    const [draggedItem, setDraggedItem] = useState('');
    const [sourceLog, setSourceLog] = useState('');

    // console.log('hook rendering')

    const handleDragStart = (e: React.DragEvent, value: string, sourceLogValue: string) => {
        // console.log('event: ',e);
        setDraggedItem(value);
        setSourceLog(sourceLogValue);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent, targetLog: string) => {
        e.preventDefault();
        if (sourceLog !== targetLog) {
            switch (targetLog) {
                case 'Backlogs':
                    setBackLogs(prev => [...prev, draggedItem]);
                    break;
                case 'In progress':
                    setInProgress(prev => [...prev, draggedItem]);
                    break;
                case 'Completed':
                    setCompleted(prev => [...prev, draggedItem]);
                    break;
                default:
                    break;
            }

            switch (sourceLog) {
                case 'Backlogs':
                    setBackLogs(prev => prev.filter(item => item !== draggedItem));
                    break;

                case 'In progress':
                    setInProgress(prev => prev.filter(item => item !== draggedItem));
                    break;

                case 'Completed':
                    setCompleted(prev => prev.filter(item => item !== draggedItem));
                    break;
            }
        }
    }

    const handleTicketInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewTicket(value);
    }

    const handleAddNewTicket = (value: string) => {
        if (value.trim()) {
            setBackLogs(prev => [...prev, value]);
            setNewTicket('');
        }
    }
    return { newTicket, backLogs, inProgress, completed, handleTicketInputChange, handleAddNewTicket, handleDragStart, handleDragEnter, handleDragOver, handleDrop }
}

export default useHandleTickets