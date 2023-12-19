import { Router } from 'express';
import { getDrinks } from '../controllers/drinks.controller';

export const drinksRouter = Router();

drinksRouter.get('/', getDrinks);
