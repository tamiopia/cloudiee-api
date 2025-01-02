import { Router } from "express";

export default function(): Router {
	const router = Router()

	router.get("/", (req, res) => {
		res.send("Hello, world!")
	})

	router.get("/error", (req, res) => {
		throw new Error("This is an unhandled error!")
	})

	router.get("/timeout-error", async (req, res) => {
		await new Promise((resolve, reject) => setTimeout(reject, 1000))
	})

	router.get("/promise-error", (req, res) => {
		Promise.reject(new Error("This is a promise error!"))
	})

	return router
}