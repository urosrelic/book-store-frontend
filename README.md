# Bookstore

Online book library where users can buy books and see detailed information about them

## Tech Stack

**Frontend:**

- React
- CSS
- Material UI

**Backend:**

- Spring Boot
- MySQL

You can find the backend project code [here](https://github.com/urosrelic/book-store-backend).

## Demo

https://book-store-frontend-puce.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/urosrelic/book-store-frontend.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Change vite.config.js to target localhost or your own url

```bash
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
  },
});
```

Start the server

```bash
  npm run dev
```
