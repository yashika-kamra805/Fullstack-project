const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "BFHL API is Running"
    });
});

app.post("/bfhl", (req, res) => {

    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            success: false,
            message: "data must be an array"
        });
    }

    res.json({
        user_id: "YOURNAME_DDMMYYYY",
        email_id: "YOUR_COLLEGE_EMAIL",
        college_roll_number: "YOUR_ROLL_NUMBER",
        hierarchies: [],
        invalid_entries: [],
        duplicate_edges: [],
        summary: {}
    });

});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});