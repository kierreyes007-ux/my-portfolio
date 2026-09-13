
function JobCard( {job} ){
    return(
        <div className="border-2 p-4 rounded-xl">
            <p>{job.company}</p>
            <p>{job.position}</p>
            <p>{job.location}</p>
            <p>{job.status}</p>
        </div>
    )
}
export default JobCard;