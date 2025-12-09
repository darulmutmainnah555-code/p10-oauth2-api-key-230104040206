const mongoose = require('mongoose');

const apikeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        minlength: 20
    },
    owner: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'revoked'],
        default: 'active',
    },
}, { timestamps: true});

const ApiKey = mongoose.model('ApiKey', apikeySchema);
module.exports = ApiKey;