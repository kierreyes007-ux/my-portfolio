    const pool = require("../config/db");

    async function getJobs(req, res){
        try{
            const result = await pool.query("SELECT * FROM jobs WHERE user_id = $1", [req.userId])
            res.status(200).json(result.rows)
        }catch(err){
            console.log(err.message);
            res.status(500).json({error: "Internal server error"});
        }
    }

    async function getJobById(req, res) {
        const id = req.params.id;
        try{
            const result = await pool.query("SELECT * FROM jobs WHERE ID = $1 AND user_id = $2", [id, req.userId])
        
            if(result.rows.length === 0){
                return res.status(404).json({error: "404 not found"})
            }
            res.status(200).json(result.rows[0])
        }catch(err){
        
            console.log(err.message);
            res.status(500).json({error: "Internal server error"});
        }
    }

    async function createJob(req, res) {
        const {
            company,
            position,
            location,
            status,
            date_applied,
            job_url,
            notes
        } = req.body;
        const userId = req.userId;

        try{
            const result = await pool.query("INSERT INTO jobs (company, position, location, status, date_applied, job_url, notes, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [
                company,
                position,
                location,
                status,
                date_applied,
                job_url,
                notes,
                userId

            ]);
            res.status(201).json(result.rows[0]);
            
        }catch(err){    
            console.log(err.message);
            res.status(500).json({error: "Internal server error"});
        }
        
    }

    async function updateJob(req, res) {
        const id = req.params.id;
        const allowedFields = [
            "company",
            "position",
            "location",
            "status",
            "date_applied",
            "job_url",
            "notes"
            
        ]
        const updates = [];
        const values = [id, req.userId];

        allowedFields.forEach((field) => {
            if(req.body[field] !== undefined){
                updates.push(`${field} = $${values.length + 1}`)
                values.push(req.body[field])
            }
        })
        if(updates.length === 0) {
            return res.status(400).json({error: "No fields provided for update"});
        }
        try{
        
            const result = await pool.query(`UPDATE jobs SET ${updates.join(", ")} WHERE ID = $1 AND user_id = $2 RETURNING *`, values)
            if(result.rows.length === 0) {
                return res.status(404).json({error: "Job not found"});
            }
            res.status(200).json(result.rows[0]);
        }catch(err){
            console.log(err.message)
            res.status(500).json({error: "Internal server error"})
        }

    }

    async function deleteJob(req, res) {
        const id = req.params.id;
        try{
            const result = await pool.query("DELETE FROM jobs WHERE ID = $1 AND user_id = $2 RETURNING *", [id, req.userId]);
            if(result.rows.length === 0){
            return res.status(404).json({error: "Id not found"});
            }
            console.log(result.rows[0])
            res.status(204).send()
        }catch(err){
            console.log(err.message);
            res.status(500).json({error: "Internal server error"})
        }
    }
    module.exports = { getJobs, createJob, getJobById, updateJob, deleteJob };