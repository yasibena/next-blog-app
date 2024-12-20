# Next.js TailwindCSS TypeScript Blog App with Authentication

This project combines **Next.js 14**, **TailwindCSS**, and **TypeScript** to create a responsive robust blog application. It features **NextAuth** for authentication, **MongoDB** for user management, and **bcrypt** for secure password hashing. Blog data is dynamically fetched from the [dummyjson](https://dummyjson.com/) API, and reusable components streamline the user interface.


## Home page

![Screenshot (470)](https://github.com/user-attachments/assets/4ece5d7d-046a-45be-acd5-8884f93d712c)

## Login page 

![Screenshot (472)](https://github.com/user-attachments/assets/f30b329f-c196-4fa4-9238-d9f9cac46644)

## Blog page 

User should login to see blog page.

![Screenshot (473)](https://github.com/user-attachments/assets/c0099a43-a69a-4876-9db7-48953f71755c)

## Each blog post
![Screenshot (474)](https://github.com/user-attachments/assets/97a27df3-2888-45df-9a0d-a1b6e6de1d04)


---

## Features

- **Modern Frontend**: Built with Next.js 14 and styled with TailwindCSS.
- **Authentication**: User login and sign-up functionality implemented with NextAuth and MongoDB.
  also use next-auth
- **Password Security**: Uses **bcrypt** for secure password hashing.
- **Dynamic Blog Pages**: Blogs are fetched from the [dummyjson](https://dummyjson.com/) API and rendered dynamically.
- **TypeScript**: Ensures type safety and scalability.
- **Utilities**:
  - `SessionProvider`: Simplifies NextAuth session management.
  - `db.js`: Handles MongoDB database connections.

---

## Installation

### Prerequisites

1. **Node.js**: Install Node.js (version 18 or higher).
2. **MongoDB**: Set up a MongoDB instance (local or cloud-based, such as MongoDB Atlas).
3. **Environment Variables**: Configure the environment variables in a `.env.local` file.

---

### Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables
Create a .env.local file with the following variables:

### NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

### MongoDB Configuration
MONGODB_URI=your-mongodb-uri
MONGODB_DB=your-database-name
Replace placeholders with your actual credentials.
Sure! Below is the full content in a Markdown file format, as you requested:

## NextAuth Integration

### What is NextAuth?

[NextAuth](https://next-auth.js.org/) is a complete authentication solution for **Next.js** applications. It allows you to add secure authentication to your app, including login functionality via multiple providers (Google, GitHub, etc.) or custom username/password authentication, as in this project.

In this project, **NextAuth** is used to manage the authentication process, including the login and sign-up features. It integrates seamlessly with **MongoDB** to store user credentials.

### Installing NextAuth

NextAuth is installed as a dependency when setting up the project:

```bash
npm install next-auth



# Run Development Server

```bash
npm run dev
The app will be available at http://localhost:3000.
```
## Folder Structure
```markdown
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth].ts  # NextAuth configuration
│   │   ├── blog                  # Blog-related API routes
│   │   └── signup                # User sign-up API
│   ├── blog
│   │   └── [slug]                # Dynamic routing for individual blogs
│   ├── contact                   # Contact page
│   ├── fonts                     # Font configurations
│   ├── login                     # Login page
│   ├── signup                    # Sign-up page
│   ├── models                    # MongoDB models (e.g., User, Blog)
│   └── utils                     # Utility functions
│
├── components
│   ├── LoginForm.tsx             # Login form component
│   ├── Navbar.tsx                # Navbar component
│   ├── PostLists.tsx             # Component to list all posts
│   ├── SignupForm.tsx            # Signup form component
│   └── SinglePost.tsx            # Component for displaying a single blog post
│
├── utils
│   ├── SessionProvider.tsx       # Simplifies NextAuth session management
│   └── db.js                     # MongoDB connection logic
│
├── images                        # Static assets (e.g., icons, images)
│
├── styles                        # Global and TailwindCSS styles
│
└── tailwind.config.js            # TailwindCSS configuration
```

## Utilities Overview
SessionProvider
Encapsulates the app with session context from NextAuth.
Simplifies access to the session state throughout the app.
db.js
Establishes a connection to the MongoDB database.

## Password Hashing with Bcrypt
How Bcrypt Is Used
Sign-Up: Passwords are hashed using bcrypt before storing them in MongoDB.
Login: The hashed password is compared using bcrypt to ensure security.
Example Implementation:

```
import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
```

## Notes
Login to Access Blog Content: To view the list of blog posts, users must log in first. Once authenticated, they will have access to the dynamic blog pages.

## Integration
Signup API: Hashes the password before storing it.
Login API: Validates the hashed password using bcrypt’s comparison function.


