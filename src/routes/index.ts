import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

/**
 * TO-DO: Create routes
 */

// default routes

/**
 * Root
 */

router.get('/', (req: Request, res: Response) =>
  res.status(200).json({ message: 'Mock Integrator' })
);

/**
 * Errors
 */

// 404
router.use((req: Request, res: Response) => {
  return res.status(404).send({ message: `404: Route ${req.url} not found.` });
});

// 500 - Any server error
router.use((err: Error, req: Request, res: Response) => {
  return res.status(500).send({ error: err });
});

export default router;
