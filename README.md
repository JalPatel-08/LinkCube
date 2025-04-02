# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/137893ea-1014-494f-a078-ff85378c06d0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/137893ea-1014-494f-a078-ff85378c06d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/137893ea-1014-494f-a078-ff85378c06d0) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

linkcube-connectivity-main/
  ├── .gitignore
  ├── README.md
  ├── bun.lockb
  ├── components.json
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── tailwind.config.ts
  ├── tsconfig.app.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  ├── vite.config.ts
  ├── public/
  │   ├── favicon.ico
  │   ├── placeholder.svg
  │   ├── robots.txt
  │   ├── lovable-uploads/
  │   │   ├── 799a1a5a-4a6a-4bdb-8efb-f90ca2d25c0d.png
  ├── src/
  │   ├── App.css
  │   ├── App.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   ├── vite-env.d.ts
  │   ├── components/
  │   │   ├── layout/
  │   │   │   ├── Header.tsx
  │   │   │   ├── Layout.tsx
  │   │   ├── ui/  (Common UI Components)
  │   │   │   ├── accordion.tsx
  │   │   │   ├── alert-dialog.tsx
  │   │   │   ├── button.tsx
  │   │   │   ├── card.tsx
  │   │   │   ├── checkbox.tsx
  │   │   │   ├── form.tsx
  │   │   │   ├── input.tsx
  │   │   │   ├── sidebar.tsx
  │   │   │   ├── table.tsx
  │   │   │   ├── toast.tsx
  │   ├── hooks/  (Custom Hooks)
  │   │   ├── use-mobile.tsx
  │   │   ├── use-toast.ts
  │   ├── lib/  (Utilities)
  │   │   ├── utils.ts
  │   ├── pages/  (Main Pages)
  │   │   ├── Connect.tsx
  │   │   ├── Dashboard.tsx
  │   │   ├── Events.tsx
  │   │   ├── Home.tsx
  │   │   ├── Index.tsx
  │   │   ├── Jobs.tsx
  │   │   ├── NotFound.tsx
  │   │   ├── Resources.tsx
