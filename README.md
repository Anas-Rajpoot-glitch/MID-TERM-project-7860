# MID-TERM-project-7860
 Coffee Shop App (React Native + Express API)

This Expo project connects to your Coffee Shop Server API (Node + MongoDB Atlas)
and displays the full menu with a random in-stock item button.

Folder Overview
coffee-shop-app/
  ├── App.js          
  ├── package.json
  ├── node_modules/
  ├── assets/
  ├── app.json
  └── README.md

 1. Prerequisites

Before running the mobile app, make sure your backend is already working:

The server from coffee-shop-server.zip is running
→ npm run dev

You see:

Connected to MongoDB
Coffee shop server running on port 3000


You can open http://localhost:3000/menu
 in your browser and see JSON.

 2. How to run the Expo app

Open a terminal and create your project:

npx create-expo-app coffee-shop-app
cd coffee-shop-app
npm install


Replace the content of App.js with the code provided in
Expo-App.js
 — or paste it manually.

In your new App.js, find this line:

const API = "http://YOUR_PC_IP:3000";


Replace it with your actual computer IP.
For example:

const API = "http://192.168.1.5:3000";


(Find it using ipconfig on Windows or ifconfig on macOS/Linux.)

Run Expo:

npm start


Scan the QR code with the Expo Go app on your phone
(or run in Android/iOS emulator).

🔗 3. App Features

✅ Fetches all items from GET /menu
✅ Fetches one random in-stock item from GET /menu/random
✅ Displays category, name, price, and out-of-stock status
✅ Works on Android, iOS, or web preview (via Expo)

🧠 Example Output

On screen:

Coffee Shop Menu
[Get Random In-Stock Item]

Random: Latte — Rs. 900

Hot Drinks • Espresso — Rs. 800.5
Hot Drinks • Cappuccino — Rs. 550.5
...
Pastries • Muffin — Rs. 400 (Out of Stock)

🛠 Troubleshooting
Problem	Fix
Network request failed	Make sure backend is running and IP in App.js is correct
JSON empty	Run npm run seed inside the server folder
Expo not loading	Restart Expo (Ctrl+C → npm start) and rescan QR code
MongoDB not connecting	Check .env credentials in coffee-shop-server
🧾 Credits

Backend: Express + Mongoose
Database: MongoDB Atlas
Frontend: React Native (Expo)

Created as part of the Coffee Shop Full-Stack Assignment ☕💻
