
# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional experience, projects, and contact information.

## Live Demo

Visit the live site: [Portfolio](https://lovable.dev/projects/1328b782-ab9c-4061-bff6-0a3a2b678ea8)

## Frontend Features

- **Responsive Design**: Fully responsive for all device sizes
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Animated UI**: Smooth animations using Framer Motion
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Modern UI**: Glassmorphic effects and clean typography

## Pages

1. **Home**: Introduction with animated hero section
2. **About**: Professional background, skills, and experience
3. **Projects**: Portfolio of work with filterable categories
4. **Contact**: Contact form and professional information

## Tech Stack (Frontend)

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite

## Backend Requirements

The frontend is designed to integrate with a Python backend API. Here's the proposed structure:

### Backend Models

1. **User Model**
   - Fields:
     - user_id (Primary Key)
     - email (String, unique)
     - password (Hashed String)
     - first_name (String)
     - last_name (String)
     - role (String: 'admin', 'viewer')
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - authenticate()
     - update_profile()
     - reset_password()

2. **Project Model**
   - Fields:
     - project_id (Primary Key)
     - title (String)
     - slug (String, unique)
     - description (Text)
     - content (Rich Text)
     - image_url (String)
     - github_url (String, optional)
     - live_url (String, optional)
     - technologies (Array of Strings)
     - category (String: 'web', 'mobile', 'design', etc.)
     - featured (Boolean)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_projects()
     - get_project_by_slug()
     - create_project()
     - update_project()
     - delete_project()
     - get_featured_projects()

3. **Contact Form Model**
   - Fields:
     - contact_id (Primary Key)
     - name (String)
     - email (String)
     - message (Text)
     - subject (String)
     - status (String: 'new', 'read', 'replied')
     - created_at (DateTime)
   - Functions:
     - submit_contact()
     - get_submissions()
     - update_status()
     - reply_to_contact()

4. **Skill Model**
   - Fields:
     - skill_id (Primary Key)
     - name (String)
     - category (String: 'frontend', 'backend', 'design', etc.)
     - proficiency (Integer: 1-5)
     - icon (String, path to icon)
   - Functions:
     - get_skills()
     - get_skills_by_category()
     - update_skill()

### API Endpoints

1. **Authentication**
   - POST /api/auth/login
   - POST /api/auth/logout
   - POST /api/auth/reset-password

2. **Projects**
   - GET /api/projects
   - GET /api/projects/{slug}
   - GET /api/projects/featured
   - POST /api/projects (admin)
   - PUT /api/projects/{id} (admin)
   - DELETE /api/projects/{id} (admin)

3. **Contact**
   - POST /api/contact
   - GET /api/contact/submissions (admin)
   - PUT /api/contact/{id}/status (admin)
   - POST /api/contact/{id}/reply (admin)

4. **Skills**
   - GET /api/skills
   - GET /api/skills/categories
   - PUT /api/skills/{id} (admin)

### Recommended Python Stack

- **Framework**: FastAPI or Django REST Framework
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy (FastAPI) or Django ORM
- **Authentication**: JWT tokens
- **Validation**: Pydantic (FastAPI) or Django serializers
- **Email Service**: SendGrid or SMTP integration
- **File Storage**: AWS S3 or similar for project images
- **Deployment**: Docker containers on a cloud provider (AWS, GCP, or Azure)
- **CI/CD**: GitHub Actions or GitLab CI

### Database Schema

```
┌───────────────────┐       ┌───────────────────┐
│     User          │       │     Project       │
├───────────────────┤       ├───────────────────┤
│ user_id           │       │ project_id        │
│ email             │       │ title             │
│ password_hash     │       │ slug              │
│ first_name        │       │ description       │
│ last_name         │       │ content           │
│ role              │       │ image_url         │
│ created_at        │       │ github_url        │
│ updated_at        │       │ live_url          │
└───────────────────┘       │ technologies      │
                            │ category          │
                            │ featured          │
                            │ created_at        │
                            │ updated_at        │
                            └───────────────────┘
                                      
┌───────────────────┐       ┌───────────────────┐
│  ContactForm      │       │     Skill         │
├───────────────────┤       ├───────────────────┤
│ contact_id        │       │ skill_id          │
│ name              │       │ name              │
│ email             │       │ category          │
│ message           │       │ proficiency       │
│ subject           │       │ icon              │
│ status            │       └───────────────────┘
│ created_at        │
└───────────────────┘
```

### Environment Variables

The backend should use environment variables for:
- Database connection
- JWT secret key
- Email service credentials
- Storage service credentials
- CORS settings
- Debug flags

## Frontend-Backend Integration

The frontend is built to consume a RESTful API with the following integration points:

1. Projects gallery loads data from `/api/projects`
2. Contact form submits to `/api/contact`
3. Admin authentication via `/api/auth/login`
4. Admin dashboard for project and contact management

## Getting Started with Development

### Backend Setup (Python)

1. Clone this repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables in a `.env` file
5. Initialize the database:
   ```bash
   python init_db.py
   ```
6. Run the development server:
   ```bash
   uvicorn main:app --reload  # For FastAPI
   # or
   python manage.py runserver  # For Django
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   npm i
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The frontend and backend can be deployed separately:

- Frontend: Netlify, Vercel, or similar static hosting
- Backend: Cloud provider with Docker support (AWS, GCP, Azure)

## License

MIT
