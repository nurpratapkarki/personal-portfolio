# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional experience, projects, and contact information.

## 🚀 Features

- **Responsive Design**: Fully responsive for all device sizes
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Animated UI**: Smooth animations using Framer Motion
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Modern UI**: Glassmorphic effects and clean typography
- **Blog System**: Dynamic blog with categories, tags, and article pages

## 🛠️ Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

```bash
npm run test
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for the animations

## Live Demo

Visit the live site: [Portfolio](https://lovable.dev/projects/1328b782-ab9c-4061-bff6-0a3a2b678ea8)

## Pages

1. **Home**: Introduction with animated hero section
2. **About**: Professional background, skills, and experience
3. **Projects**: Portfolio of work with filterable categories
4. **Blog**: Articles with category and tag filtering
5. **Contact**: Contact form and professional information

## Backend Requirements

The frontend is designed to integrate with a Python backend API. Here's the detailed structure for implementing backend functionality for all pages:

### Backend Models

#### Authentication & User Management

1. **User Model**
   - Fields:
     - user_id (Primary Key)
     - email (String, unique)
     - password (Hashed String)
     - first_name (String)
     - last_name (String)
     - role (String: 'admin', 'viewer')
     - avatar_url (String, optional)
     - bio (Text, optional)
     - social_links (JSON: {platform: url})
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - authenticate()
     - update_profile()
     - reset_password()
     - get_admin_status()

#### Home Page

2. **Hero Model**
   - Fields:
     - hero_id (Primary Key)
     - title (String)
     - subtitle (String)
     - description (Text)
     - background_image_url (String)
     - cta_text (String)
     - cta_link (String)
     - is_active (Boolean)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_active_hero()
     - update_hero()

3. **StatCounter Model**
   - Fields:
     - counter_id (Primary Key)
     - title (String)
     - value (Integer)
     - icon (String)
     - order (Integer)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_counters()
     - update_counter()

#### About Page

4. **Profile Model**
   - Fields:
     - profile_id (Primary Key)
     - headline (String)
     - about_text (Rich Text)
     - profile_image_url (String)
     - resume_url (String)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_profile()
     - update_profile()

5. **Experience Model**
   - Fields:
     - experience_id (Primary Key)
     - company (String)
     - position (String)
     - start_date (Date)
     - end_date (Date, nullable)
     - is_current (Boolean)
     - description (Text)
     - logo_url (String, optional)
     - order (Integer)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_experiences()
     - add_experience()
     - update_experience()
     - delete_experience()

6. **Education Model**
   - Fields:
     - education_id (Primary Key)
     - institution (String)
     - degree (String)
     - field_of_study (String)
     - start_date (Date)
     - end_date (Date, nullable)
     - is_current (Boolean)
     - description (Text, optional)
     - logo_url (String, optional)
     - order (Integer)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_education()
     - add_education()
     - update_education()
     - delete_education()

7. **Skill Model**
   - Fields:
     - skill_id (Primary Key)
     - name (String)
     - category (String: 'frontend', 'backend', 'design', etc.)
     - proficiency (Integer: 1-5)
     - icon (String, path to icon)
     - order (Integer)
     - is_featured (Boolean)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_skills()
     - get_skills_by_category()
     - get_featured_skills()
     - add_skill()
     - update_skill()
     - delete_skill()

8. **Testimonial Model**
   - Fields:
     - testimonial_id (Primary Key)
     - name (String)
     - position (String)
     - company (String)
     - text (Text)
     - avatar_url (String, optional)
     - rating (Integer: 1-5)
     - is_featured (Boolean)
     - order (Integer)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_testimonials()
     - get_featured_testimonials()
     - add_testimonial()
     - update_testimonial()
     - delete_testimonial()

#### Projects Page

9. **Project Model**
   - Fields:
     - project_id (Primary Key)
     - title (String)
     - slug (String, unique)
     - description (Text)
     - content (Rich Text)
     - thumbnail_url (String)
     - banner_image_url (String, optional)
     - github_url (String, optional)
     - live_url (String, optional)
     - demo_video_url (String, optional)
     - technologies (Array of Strings)
     - category (String: 'web', 'mobile', 'design', etc.)
     - is_featured (Boolean)
     - order (Integer)
     - created_at (DateTime)
     - updated_at (DateTime)
   - Functions:
     - get_all_projects()
     - get_project_by_slug()
     - get_projects_by_category()
     - get_featured_projects()
     - add_project()
     - update_project()
     - delete_project()

10. **ProjectCategory Model**
    - Fields:
      - category_id (Primary Key)
      - name (String)
      - slug (String, unique)
      - description (Text, optional)
      - icon (String, optional)
      - order (Integer)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_all_categories()
      - add_category()
      - update_category()
      - delete_category()

11. **ProjectImage Model**
    - Fields:
      - image_id (Primary Key)
      - project_id (Foreign Key)
      - url (String)
      - alt_text (String)
      - order (Integer)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_images_by_project()
      - add_project_image()
      - update_project_image()
      - delete_project_image()

#### Blog Page

12. **BlogPost Model**
    - Fields:
      - post_id (Primary Key)
      - title (String)
      - slug (String, unique)
      - excerpt (Text)
      - content (Rich Text)
      - cover_image_url (String)
      - author_id (Foreign Key to User)
      - category_id (Foreign Key to BlogCategory)
      - status (String: 'draft', 'published')
      - published_at (DateTime, nullable)
      - meta_title (String, optional)
      - meta_description (Text, optional)
      - view_count (Integer)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_all_posts()
      - get_published_posts()
      - get_post_by_slug()
      - get_posts_by_category()
      - get_posts_by_tag()
      - search_posts()
      - increment_view_count()
      - add_post()
      - update_post()
      - delete_post()

13. **BlogCategory Model**
    - Fields:
      - category_id (Primary Key)
      - name (String)
      - slug (String, unique)
      - description (Text, optional)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_all_categories()
      - get_category_with_post_count()
      - add_category()
      - update_category()
      - delete_category()

14. **BlogTag Model**
    - Fields:
      - tag_id (Primary Key)
      - name (String)
      - slug (String, unique)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_all_tags()
      - get_popular_tags()
      - add_tag()
      - update_tag()
      - delete_tag()

15. **PostTag Model** (Mapping table for many-to-many relationship)
    - Fields:
      - post_id (Foreign Key)
      - tag_id (Foreign Key)
    - Functions:
      - get_tags_by_post()
      - get_posts_by_tag()
      - add_tag_to_post()
      - remove_tag_from_post()

16. **Comment Model**
    - Fields:
      - comment_id (Primary Key)
      - post_id (Foreign Key)
      - parent_id (Foreign Key, self-referencing for replies, nullable)
      - name (String)
      - email (String)
      - content (Text)
      - is_approved (Boolean)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_comments_by_post()
      - get_approved_comments()
      - add_comment()
      - approve_comment()
      - delete_comment()

#### Contact Page

17. **Contact Form Model**
    - Fields:
      - contact_id (Primary Key)
      - name (String)
      - email (String)
      - phone (String, optional)
      - subject (String)
      - message (Text)
      - status (String: 'new', 'read', 'replied')
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - submit_contact()
      - get_all_submissions()
      - get_submission_by_id()
      - update_status()
      - delete_submission()

18. **ContactInfo Model**
    - Fields:
      - info_id (Primary Key)
      - email (String)
      - phone (String, optional)
      - address (Text, optional)
      - social_links (JSON: {platform: url})
      - map_coordinates (JSON: {lat: float, lng: float}, optional)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_contact_info()
      - update_contact_info()

19. **FAQ Model**
    - Fields:
      - faq_id (Primary Key)
      - question (String)
      - answer (Text)
      - category (String, optional)
      - order (Integer)
      - is_published (Boolean)
      - created_at (DateTime)
      - updated_at (DateTime)
    - Functions:
      - get_all_faqs()
      - get_published_faqs()
      - add_faq()
      - update_faq()
      - delete_faq()

### API Endpoints

1. **Authentication**
   - POST /api/auth/login
   - POST /api/auth/logout
   - POST /api/auth/reset-password

2. **Home Page**
   - GET /api/hero
   - GET /api/stats

3. **About Page**
   - GET /api/profile
   - GET /api/experiences
   - GET /api/education
   - GET /api/skills
   - GET /api/skills/categories
   - GET /api/testimonials

4. **Projects Page**
   - GET /api/projects
   - GET /api/projects/{slug}
   - GET /api/projects/featured
   - GET /api/projects/categories
   - GET /api/projects/category/{slug}

5. **Blog Page**
   - GET /api/blog/posts
   - GET /api/blog/posts/{slug}
   - GET /api/blog/categories
   - GET /api/blog/tags
   - GET /api/blog/posts/search?q={query}
   - GET /api/blog/posts/category/{slug}
   - GET /api/blog/posts/tag/{slug}
   - POST /api/blog/comments
   - GET /api/blog/comments/post/{post_id}

6. **Contact Page**
   - GET /api/contact/info
   - POST /api/contact/submit
   - GET /api/faqs

7. **Admin Endpoints** (Protected)
   - CRUD operations for all models
   - PUT /api/admin/contact/{id}/status
   - POST /api/admin/contact/{id}/reply

### Recommended Python Stack

- **Framework**: FastAPI or Django REST Framework
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy (FastAPI) or Django ORM
- **Authentication**: JWT tokens
- **Validation**: Pydantic (FastAPI) or Django serializers
- **Email Service**: SendGrid or SMTP integration
- **File Storage**: AWS S3 or similar for images and files
- **Caching**: Redis
- **Search**: PostgreSQL full-text search or Elasticsearch
- **Deployment**: Docker containers on a cloud provider (AWS, GCP, or Azure)
- **CI/CD**: GitHub Actions or GitLab CI

### Database Schema

The database schema would include all the models described above with proper relationships:

- One-to-Many relationships:
  - User to BlogPosts
  - BlogCategory to BlogPosts
  - Project to ProjectImages

- Many-to-Many relationships:
  - BlogPosts to BlogTags (via PostTag mapping table)

### Environment Variables

The backend should use environment variables for:
- Database connection
- JWT secret key
- Email service credentials
- Storage service credentials
- CORS settings
- Debug flags
- API keys for external services

## Frontend-Backend Integration

The frontend is built to consume a RESTful API with the following integration points:

1. Fetching data for all page sections
2. Dynamic content loading for blog posts and projects
3. Form submission for contact page
4. Authentication for admin dashboard
5. Search functionality for blog and projects

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
