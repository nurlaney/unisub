import express, { Request, Response } from "express";
import cors from "cors";
import { IReminder } from "../interfaces";
import { Reminder } from "../models";

export const RemindersRouter = express.Router();

RemindersRouter.use(cors());

// Get
RemindersRouter.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const reminder = await Reminder.findById(id);

        !reminder
            ? res.status(404).json({ message: "Not found" })
            : res.json(reminder);

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get list
RemindersRouter.get("/", async (req: Request, resp: Response) => {
    try {
        const reminders = await Reminder.find();
        resp.status(200).json(reminders);
    }
    catch (error) {
        resp.status(500).json({ message: error.message });
    }
});

// Create
RemindersRouter.post("/create", async (req: Request, resp: Response) => {
    const reminderPayload: IReminder = {
        ...req.body,
    };
    const reminder = new Reminder(reminderPayload);

    try {
        const newReminder = await reminder.save();
        resp.json(newReminder);
    }
    catch (error) {
        resp.status(500).json({ message: error.message });
    }
});

// Update
RemindersRouter.patch("/:id", async (req: Request, res: Response) => {

    Reminder.findByIdAndUpdate(req.params.id, req.body)
    .then(async (reminders: any) => {
      if (!reminders) {
        return res.status(404).send();
      }
      await res.json(Reminder.find());
    })
    .catch((error: Error) => {
      res.status(500).send(error);
    });
});

// Delete
RemindersRouter.delete('/:id', async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const reminder = await Reminder.findById(id);

        if (!reminder) {
            res.status(404).json({ message: 'Not found' });
        } 
        else {
            await reminder.remove()
            res.json({ message: 'Deleted' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});