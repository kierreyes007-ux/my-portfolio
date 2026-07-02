    import { useState, useEffect } from "react";

    function Events() {
        const [events, setEvent] = useState(() => {
            const savedEvents = localStorage.getItem("event");
            return savedEvents ? JSON.parse(savedEvents) : [];
        });
        const [selectedEvent, setSelectedEvent] = useState(null);
        const [currentIndex, setCurrentIndex] = useState(-1);
        const [text, setText] = useState("");
        const [date, setDate] = useState("");
        const [searchTerm, setSearchTerm] = useState("");
        const filteredEvent = events.filter(eve => eve.name.toLowerCase().includes(searchTerm.toLowerCase()));
        useEffect(() => {
            localStorage.setItem("event", JSON.stringify(events))
        }, [events])
        const addBtn = () => {
            if(!text.trim() || !date) return;
            setEvent([...events, {name: text, dueDate: date, status: false}]);
            setText("");
            setDate("");
        }
        const selectBtn = () => {
            if(events.length === 0) return;
            let nextIndex = currentIndex + 1;
            if(nextIndex >= events.length){
                nextIndex = 0;
            }
            setCurrentIndex(nextIndex);
            setSelectedEvent(events[nextIndex]);
        }
        const markBtn = () => {
            if(!selectedEvent) return;
        setEvent(events.map((eve) => eve === selectedEvent ? {...eve, status: !eve.status} : eve));

        setSelectedEvent(null);
        }
        const deleteBtn = () => {
            if(!selectedEvent) return;
            setEvent(events.filter((eve) => eve !== selectedEvent));
            setSelectedEvent(null);

        }
        const clearBtn = () => {
            setEvent([]);
            setCurrentIndex(-1);
            setSelectedEvent(null);
            
        }
        return(
            <div className="w-full min-h-screen flex justify-center items-center bg-slate-100 px-4">
                <div className="flex flex-col gap-2 border-2 min-h-screen w-full max-w-md 
                bg-white rounded-xl shadow-lg border border-slate-200 p-5">
                    
                        <div className="bg-slate-50 rounded-lg p-4 max-h-64 overflow-auto">
                    {filteredEvent.length === 0 ? (<p>No Event</p>) : (<><p className="text-center text-2xl font-bold text-slate-700">Event List</p>
                    
                            {filteredEvent.map((eve, index) => (<div
                                className="bg-white border border-slate-200 rounded-lg p-3 mb-3 hover:bg-slate-100 transition"
                                key={index}>
                            
                                <p>{index+1}. {eve.name}</p>
                                <p> Date: {eve.dueDate}</p>
                                <p> Status: {eve.status ? "Completed" : "Upcoming"}</p>
                            </div>
                            
                            ))}

                        </>)}
                        
                        </div>
                    <div>
                        {selectedEvent ? (
                            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 flex justify-between">
                                <div>
                                <p className="font-bold text-blue-700">Selected Event</p>
                                <p className="font-bold ">Event: <span className="font-normal">{selectedEvent.name}</span></p>
                                <p className="font-bold">Date: <span className="font-normal">{selectedEvent.dueDate}</span></p>
                                <p className="font-bold">Status: <span className="font-normal">{selectedEvent.status ? "Completed" : "Upcoming"}</span> </p> 
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p>Upcoming Events: {events.filter((e, i) => e.status === false).length}</p>
                                    <p>Completed Event: {events.filter((e) => e.status === true).length}</p>
                                </div>
                            </div>
                                    ) : (
                                    <p> No Selected Event </p>)}
                    </div>
                    <div className="flex flex-col">
                    <input type="text" className="border-2 border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none
                    " placeholder="Enter Event"
                    value={text} onChange={(e) => setText(e.target.value)}/>
                    <input type="date" className="border-2 border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none" 
                    value={date} onChange={(e) => setDate(e.target.value)} />
                    <input type="text" className="border-2 border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Search Input"
                    value={searchTerm} onInput={(e)=> setSearchTerm(e.target.value)}/>
                    <button className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2"
                    onClick={addBtn}>Add</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
                    onClick={selectBtn}>Select</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md py-2"
                    onClick={markBtn}>Toggle Complete</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2"
                    onClick={deleteBtn}>Delete Selected</button>
                    <button className="bg-slate-700 hover:bg-slate-800 text-white rounded-md py-2"
                    onClick={clearBtn}>Clear All</button>
                    </div>


            </div>
            </div>
        )
    }
    export default Events;