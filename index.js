const express = require('express');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('../public')); // Serve frontend

// Decryption API
app.post('/decrypt', (req, res) => {
    const { encryptedData, secretKey } = req.body;
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
        res.json({ success: true, decryptedData: decrypted });
    } catch (err) {
        res.status(400).json({ success: false, error: "Decryption failed!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});