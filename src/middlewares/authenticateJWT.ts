import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        role: string;
      };
    }
  }
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access token is missing or invalid" });
    return;
  }

  try {
    const secretKey = process.env.JWT_SECRET || "your_secret_key";
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    req.user = { id: decoded.id, role: decoded.role };

    next();
  } catch (error) {
    console.error("JWT authentication error:", error);
    res.status(403).json({ message: "Invalid or expired token" });
    return;
  }
};
