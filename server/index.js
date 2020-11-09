import express from 'express';

const server = express();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server starting on port ${PORT}`));
