const express = require("express");

const { getJobs, createJob, getJobById, updateJob, deleteJob } = require("../controllers/jobController")

const router = express.Router();

router.get("/", getJobs)
router.get("/:id", getJobById)
router.post("/", createJob)
router.patch("/:id", updateJob)
router.delete("/:id", deleteJob)

module.exports = router;    