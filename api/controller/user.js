const express = require("express")
const router = express.Router();

router.post("/" ,(req, res) => {
try {
    const {name, email, password} = req.body
} catch (error) {
    
}    
});

module.exports = router;