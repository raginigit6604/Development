import Task from "../Models/schema.js";

export const createtask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const newTask = await Task.create({ title, description });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error generated: ", error);
  }
};


export const getalltask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET task by ID
export const gettaskbyid = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updatetask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deletetask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
