import express from "express"
import { app } from "./src/app"
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listenning on port ${PORT}`))