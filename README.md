# Rental App - Vercel Deployment

This Flask application is configured for deployment on Vercel.

## Deployment Steps

1.  **Push to GitHub**:
    -   Create a new repository on GitHub.
    -   Push this project code to the repository.

2.  **Deploy on Vercel**:
    -   Go to [Vercel](https://vercel.com).
    -   Click **"Add New Project"** > **"Import"** (Select your GitHub repository).
    -   Vercel should automatically detect the `vercel.json` configuration.
    -   Click **"Deploy"**.

## Important Limitations (Ephemeral Data)

Since Vercel is a serverless platform, the local file system is **read-only** (except for temporary directories) and **ephemeral** (reset on every deployment/restart).

-   **Database**: The `database.db` (SQLite) will be reset frequently. User accounts and listings **will be lost** when the app restarts.
-   **Uploads**: Images uploaded to `static/uploads` will **disappear** after uploads.

**Recommendation for Production**:
-   Connect a persistent database (e.g., Vercel Postgres, Supabase).
-   Use cloud storage for images (e.g., AWS S3, Vercel Blob).

For now, this configuration will allow the app to **run and demonstrate functionality**, but data will not persist long-term.
