import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";
export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
