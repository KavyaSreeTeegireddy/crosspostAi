# CrossPost AI
*AI-powered video processing and social media automation backend*

## 📖 Overview
**CrossPost AI** is a backend solution that automates video processing for multiple social media platforms such as **Instagram Reels**, **YouTube Shorts**, and **Facebook**.  
It handles **video resizing, aspect ratio conversion, AI-generated captions, hashtags, and local storage of processed videos** — all in one backend service.

## ✨ Features
- **Multi-Platform Video Processing**
  - Instagram Reels: `9:16` (1080x1920)  
  - YouTube Shorts: `16:9` (1920x1080)  
  - Facebook: `4:5` (1080x1350)
- **AI Captioning and Hashtag Generation**
  - Captions extracted using **Whisper** (or fallback).  
  - **Gemini AI** creates platform-optimized captions and hashtags.
- **Local Backend Storage**
  - Videos are saved in backend directories:  
    - `uploads/` for raw uploaded videos  
    - `outputs/` for final processed videos  
- **Metadata Management**
  Video metadata (captions, file details, platform data) is stored in **Firestore**, with in-memory fallback.
- **Video Preview and Download**
  Stream and download videos directly from the backend.

## 🛠 Tech Stack
- **Backend:** Node.js, Express  
- **Video Processing:** FFmpeg (via `fluent-ffmpeg`)  
- **AI Services:** Google Gemini AI, Whisper (mock)  
- **Database:** Firebase Firestore  
- **Storage:** Local server storage (uploads/outputs)  

## 📂 Project Structure
```
CrossPost-AI/
│
├── backend/
│   ├── server.js        # Main backend server
│   ├── uploads/         # Uploaded videos
│   ├── outputs/         # Processed videos
│   ├── temp/            # Temporary files
│   └── .env             # Environment variables
```

## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/crosspost-ai.git
cd crosspost-ai/backend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create a `.env` file inside `backend/`:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_SERVICE_ACCOUNT_KEY=your_firebase_service_account_json
```
### 4. Start the Server
```bash
npm run dev
```
The backend runs on **http://localhost:5000**

## 📡 API Endpoints
### POST /api/upload
Upload a video and process it for selected platforms.  
**Body (form-data):**
- `video` (file)
- `platforms` (JSON: `["instagram","youtube"]`)
- `userId` (string)

**Response:** Metadata of processed videos.

### GET /api/videos/:userId
Fetch all processed videos for a user.

### GET /api/preview/:userId/:filename
Stream processed videos.

### GET /api/download/:userId/:filename
Download processed videos.

## 🌟 Why CrossPost AI?
Content creators face challenges in **reformatting videos for different platforms** and writing **engaging captions**.  
CrossPost AI **automates** these repetitive tasks:  
- One upload → multiple platform-ready outputs.  
- AI-powered captions and hashtags → more engagement.  
- Easy streaming and downloading.

## 🤝 Contributing
We welcome contributions!  
1. Fork this repository.  
2. Create a branch: `git checkout -b feature/new-feature`.  
3. Commit changes: `git commit -m "Add new feature"`.  
4. Push and open a pull request.

## 📝 License
This project is licensed under the **MIT License**.
