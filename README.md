# 🚀 QR Code Generator App

A full-featured **QR Code Generator** built with **React + Vite** and styled using **Bootstrap 5**. It allows users to input any text or URL and generate a downloadable QR code image using the `api.qrserver.com` API.

---

## 🧩 Features

- ✅ Real-time QR Code generation
- ✅ Download QR Code as `.png`
- ✅ Responsive UI with Bootstrap 5
- ✅ Beautiful animated loading spinner
- ✅ Architecture and code flow structured for scaling

---

## 🔧 Tech Stack

| Technology     | Usage                  |
|----------------|------------------------|
| React (Vite)   | Frontend framework     |
| Bootstrap 5    | Responsive UI styling  |
| Axios / Fetch  | API communication      |
| QRServer API   | QR Code generation     |
| CSS            | Custom spinner & styles |

---

## 🛠️ Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/qr-code-generator.git

# 2. Navigate to the project
cd qr-code-generator

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev


#Architecture diagram
+--------------------------+
|        User Input        |
|  (Text / URL in form)    |
+------------+-------------+
             |
             v
+--------------------------+
|  Frontend (React + Vite) |
|  - Form Validation       |
|  - Spinner UI            |
|  - Fetch QR Image        |
+------------+-------------+
             |
             v
+---------------------------+
|   API: api.qrserver.com   |
|  Returns QR Image (.png)  |
+------------+--------------+
             |
             v
+---------------------------+
| Display & Download Option |
+---------------------------+

#code flow
[User Enters Text/URL]
          |
          v
 [Click Generate Button]
          |
          v
 [Set loading = true]
          |
          v
 [Call QRServer API]
          |
          v
 [API Response Received]
          |
          v
 [Set QR Image URL]
 [Set loading = false]
          |
          v
 [Display QR Code & Download Button]

#project structure
qr-code-generator/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── QRGenerator.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
