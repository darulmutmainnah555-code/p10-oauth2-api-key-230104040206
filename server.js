// server.js

// 1. Memuat Variabel Lingkungan dari .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

// Middleware bawaan untuk parsing body JSON
app.use(express.json());

// --- 2. Koneksi ke MongoDB Atlas ---
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✔️ Koneksi ke MongoDB Atlas Berhasil!');
    } catch (err) {
        console.error('❌ GAGAL KONEKSI ke MongoDB Atlas:', err.message);
        process.exit(1);
    }
};

// --- 3. Route Dasar (pengujian) ---
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API Server Berjalan!',
        praktikum: 'P10: Simulasi API Key & OAuth 2.0',
    });
});

// --- 4. Route Dasar (Testing) ---
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/auth', authRoutes);

// --- 5. Memulai Server ---
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
        console.log('---------------------------------------------');
    });
};

// Panggil koneksi database lalu jalankan server
connectDB().then(startServer);
