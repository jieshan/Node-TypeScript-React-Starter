import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const home = (req: Request, res: Response) => {
  res.render("home", {
    title: "HomePage"
  });
};
