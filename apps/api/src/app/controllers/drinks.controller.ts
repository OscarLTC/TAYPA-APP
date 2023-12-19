import { Request, Response } from 'express';
import { Firebase } from '../config/Firebase';

export const getDrinks = async (req: Request, res: Response) => {
  try {
    const firestore = new Firebase().firestore();
    const ref = await firestore.collection('drinks').get();

    const drinks = ref.docs.map((drink) => ({
      id: drink.id,
      ...drink.data(),
    }));

    res.send(drinks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
