# Idrissi Affairs

**From Idea to Impact. We build your dream, from Kenitra to the world.**

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/anasafanif/idrissi-affaire)

A professional, modern, and minimalist website for 'Idrissi Affairs', a business services firm based in Kenitra, Morocco. This platform serves as an all-in-one digital presence for entrepreneurs, guiding them from business ideation and legal creation to financial management, digital growth, and international expansion.

The entire experience is designed to be inspiring, trustworthy, and results-oriented, speaking directly to the ambitions of Moroccan entrepreneurs.

## Key Features

-   **Comprehensive Business Services**: Full support for company creation, accounting, and strategic financial consulting.
-   **Digital Growth Engine**: Services including branding, web development, targeted advertising, and AI automation.
-   **International Mobility**: Specialized assistance for Schengen and UK visa applications through strategic business case creation.
-   **Premium & Modern UI**: A clean, minimalist design with a sophisticated color palette and strong typography.
-   **Fully Responsive**: Flawless user experience across all devices, from mobile to desktop.
-   **Built on the Edge**: High-performance and scalable architecture powered by Cloudflare Workers.

## Technology Stack

-   **Frontend**: React (with Vite), TypeScript, Tailwind CSS
-   **UI Components**: shadcn/ui, Radix UI
-   **Animations**: Framer Motion
-   **Routing**: React Router
-   **Backend**: Hono on Cloudflare Workers
-   **State Management**: Zustand
-   **Storage**: Cloudflare Durable Objects
-   **Tooling**: Bun, Vite, Wrangler CLI

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) for interacting with the Cloudflare platform.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd idrissi_affaire
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up local environment variables:**
    Create a `.dev.vars` file in the root of the project. This file is used by Wrangler for local development. For this project, you can start with an empty file, but if you add integrations (e.g., database tokens), they would go here.

    ```bash
    touch .dev.vars
    ```

## Development

To start the local development server, which includes both the Vite frontend and the Hono backend worker, run:

```bash
bun dev
```

This command will start the Vite development server, typically on `http://localhost:3000`, with hot-reloading for the frontend. API requests to `/api/*` will be automatically proxied to the local Cloudflare Worker instance.

## Project Structure

-   `src/`: Contains the frontend React application, including pages, components, hooks, and styles.
-   `worker/`: Contains the backend Hono application running on Cloudflare Workers, including API routes and entity logic.
-   `shared/`: Contains TypeScript types and interfaces shared between the frontend and the backend.
-   `public/`: Static assets that are served directly.

## Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Build the project:**
    This command bundles the frontend application and prepares the worker script for production.
    ```bash
    bun build
    ```

2.  **Deploy to Cloudflare:**
    Run the deploy command using Wrangler. Make sure you are logged in (`wrangler login`).
    ```bash
    bun deploy
    ```

Alternatively, you can connect your GitHub repository to Cloudflare Pages for continuous deployment.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/anasafanif/idrissi-affaire)