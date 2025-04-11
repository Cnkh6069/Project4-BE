//transactioncontroller

const { Transaction } = require("../models");

//get all transactions with pagination
const getTransactionList = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const { count, rows } = await Transaction.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    const totalPages = Math.ceil(count / limit);
    res.json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: count,
      },
    });
  } catch (error) {
    console.error("Error fecthing transactions", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get transaction by id
const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction record not found" });
    }
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error fetching transaction", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//create new transaction records
const createTransaction = async (req, res) => {
  try {
    const { transactionType, amount, userId, taskId } = req.body;

    const newTransaction = await Transaction.create({
      transactionType,
      amount,
      userId,
      taskId,
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error creating transaction", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//update transaction records by ID
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { transactionType, amount, userId, taskId } = req.body;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction record not found" });
    }
    await transaction.update({
      transactionType,
      amount,
      userId,
      taskId,
    });
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error updating transaction", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete transaction records by ID
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction record not found" });
    }
    await transaction.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting transaction", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTransactionList,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
