# Zidstyling booking API

This small Express API receives consultation form submissions and stores them in MySQL.

## First-time setup

1. In MySQL Workbench, open `schema.sql` and run it. It creates the `zidstyling` database and `consultation_requests` table.
2. In a new MySQL Workbench query tab, create an API login with access to save consultation requests. Replace the example password with a password you choose locally:

   ```sql
   CREATE USER 'zidstyling_app'@'localhost' IDENTIFIED BY 'choose_a_local_password';
   GRANT INSERT ON zidstyling.consultation_requests TO 'zidstyling_app'@'localhost';
   FLUSH PRIVILEGES;
   ```

   If that username already exists, use `ALTER USER 'zidstyling_app'@'localhost' IDENTIFIED BY 'choose_a_local_password';` instead of `CREATE USER`.
3. Copy `.env.example` to `.env`, then set `DB_USER=zidstyling_app` and `DB_PASSWORD` to the same password you chose. Never commit `.env` or share its password.
4. From this folder, run `npm install` once.
5. Start the API with `npm run dev`.
6. In a second terminal, start the React app from the project root with `npm run dev`.

The Vite development server forwards `/api` requests to the API on port 3001. Visit `/api/health` through the Vite app to see whether the API can reach MySQL.

## Learning the request flow

- The consultation form in `src/main.tsx` sends a JSON `POST` request to `/api/consultations`.
- `index.js` validates the required fields and uses a parameterized SQL insert.
- `schema.sql` defines the table receiving the form data.
- `.env` provides credentials to the server only; the React app never receives database credentials.
