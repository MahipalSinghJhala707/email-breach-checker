# 🔐 Email Breach Checker Website

A full-stack web application that allows users to check if their email address has been involved in a data breach.
Built using **React.js** (frontend), **Node.js + Express.js** (backend), and **MongoDB** (database).

---

## 📦 Features

* 🔎 Check whether an email was part of a data breach
* 🧠 Fast lookup with MongoDB
* 🌐 Simple UI built with React
* 📁 Realistic dataset with 24K+ breached emails

---

## 🚀 Tech Stack

* **Frontend**: React.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (local or containerized)

---

## 📁 Project Structure

```
email-breach-checker/
├── backend/              # Express backend server
│   ├── server.js         # Main server file
│   ├── routes/           # API routes
│   ├── convert.js        # Converts .txt dataset to JSON
│   ├── emails.json       # Converted email data (excluded via .gitignore)
│   ├── .env              # Environment variables (MongoDB URI)
│   └── .gitignore
├── frontend/             # React frontend
│   ├── src/              # Source code
│   ├── public/
│   ├── package.json
│   └── .gitignore
├── sample_emails.txt     # Raw dataset
├── README.md             # Project readme
└── .gitignore            # Root-level ignore file
```

---

## 🧪 How to Run the Project Locally

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/your-username/email-breach-checker.git
cd email-breach-checker
```

---

### 2. 🧠 Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/breach_db
```

Start the backend:

```bash
node server.js
```

---

### 3. 🌐 Setup the Frontend

In another terminal:

```bash
cd frontend
npm install
npm start
```

The app will be running at `http://localhost:3000`

---

### 4. 📥 Prepare the Email Dataset (Optional but Recommended)

**Step A: Convert `sample_emails.txt` into JSON**

```bash
cd backend
node convert.js
```

**Step B: Import JSON into MongoDB**

```bash
mongoimport --uri mongodb://localhost:27017/breach_db \
  --collection breaches --file emails.json --jsonArray
```

---

## ❌ Files Ignored from Git

Add these lines in `.gitignore` (already included):

```
node_modules/
emails.json
.env
```

---

## 🧠 Sample Emails for Testing

| Email                                           | Expected Result |
| ----------------------------------------------- | --------------- |
| [admin@example.com](mailto:admin@example.com)   | ✅ Breached      |
| [test@xyz.com](mailto:test@xyz.com)             | ✅ Breached      |
| [john.doe@gmail.com](mailto:john.doe@gmail.com) | ❌ Not breached  |
| [random@safe.org](mailto:random@safe.org)       | ❌ Not breached  |

Use these to test positive and negative cases.

---

## 📜 License

This project is for educational purposes only.
MIT License – use freely with credit.

---

## 👨‍💻 Author

**Mahipal Singh Jhala**
DevOps & Full-Stack Developer

