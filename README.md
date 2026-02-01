# 
PaperNova – AI Research Copilot

PaperNova is an AI-powered research assistant designed to help researchers, students, and scientists quickly explore, summarize, and reason across multiple academic papers. It aggregates papers, answers research questions with citations, and visualizes a knowledge graph connecting concepts, methods, and authors.

This project is production-ready, using MERN + Python ML microservice architecture with vector search and RAG pipelines, fully open-source and free.

Features

Multi-paper reasoning with citation-aware answers

Fetch papers from arXiv / Semantic Scholar by title or topic

Embedding-based semantic search using FAISS

Interactive knowledge graph connecting papers, methods, and keywords

Persistent chat sessions for multi-turn questioning

Open-source and free, no paid APIs

Unique Selling Points:

Aggregates insights across 10–50 papers dynamically

Generates answers with citations and links

Knowledge graph shows relationships between concepts, methods, and authors

Fully modular architecture for scalability and production readiness

Tech Stack
Layer	Technology
Frontend	React + Tailwind CSS + D3.js (Knowledge Graph)
Backend / API	Node.js + Express
Database	MongoDB (Atlas free tier / local)
ML Service	Python + FastAPI
Embeddings	Sentence-Transformers (all-MiniLM-L6-v2)
LLM	Mistral / LLaMA (local inference)
Vector DB	FAISS
Auth	JWT / Firebase Auth (optional)
Deployment	Vercel / Netlify (frontend), Render / Railway (backend + ML)
Architecture Overview
User
 ↓
Frontend (React + Tailwind + D3.js)
 ↓
Backend API (Node.js + Express)
 ↓                  ↘
MongoDB                Python ML Microservice (FastAPI)
                        - Paper fetching & parsing
                        - Embeddings (SentenceTransformers)
                        - Vector search (FAISS)
                        - RAG-based answer generation (LLM)


Industry Practices Followed:

Microservice separation for ML-heavy tasks

Asynchronous embedding generation for scalable ingestion

Logging & error handling for production monitoring

Dockerized services for reproducibility & deployment

Installation
Backend
cd backend
npm install
cp .env.example .env
npm run dev

Frontend
cd frontend
npm install
npm start

ML Service
cd ml-service
pip install -r requirements.txt
uvicorn app:app --reload --port 8000

Usage

Start ML microservice, backend, and frontend

Open frontend in browser

Enter a paper title or research topic

MindMesh fetches related papers and builds embeddings

Ask research questions in chat

Explore knowledge graph of concepts and papers

Answers include citations and links to original papers

File Structure
mindmesh/
├── backend/
│   ├── controllers/        # API logic
│   ├── routes/             # Express routes
│   ├── models/             # MongoDB models
│   ├── utils/              # Utility functions (auth, logging)
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/     # ChatBox, PaperCard, KnowledgeGraph
│   │   ├── pages/          # Home, Dashboard, PaperSearch
│   │   └── utils/          # API calls
├── ml-service/
│   ├── app.py              # FastAPI ML microservice
│   ├── embeddings.py       # Embedding generation
│   ├── vector_db.py        # FAISS vector store
│   ├── rag_model.py        # RAG-based answer generation
│   ├── paper_parser.py     # PDF / abstract parsing
│   └── utils.py            # Logging, error handling
├── docs/                   # Architecture, API documentation
├── docker/                 # Docker configs & docker-compose
└── README.md

Roadmap / Future Enhancements

Personalization per user (multi-session memory)

Trending / emerging topics notifications

Offline PDF ingestion & local indexing

Advanced knowledge graph clustering and analytics

CI/CD pipeline with GitHub Actions