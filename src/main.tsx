import '@/lib/errorReporter';
import '@/lib/i18n';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { BusinessFinancialPage } from '@/pages/services/BusinessFinancialPage';
import { DigitalGrowthPage } from '@/pages/services/DigitalGrowthPage';
import { InternationalMobilityPage } from '@/pages/services/InternationalMobilityPage';
import { OurStoryPage } from '@/pages/OurStoryPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { ContactPage } from '@/pages/ContactPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/business-financial",
    element: <BusinessFinancialPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/digital-growth",
    element: <DigitalGrowthPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/international-mobility",
    element: <InternationalMobilityPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/our-story",
    element: <OurStoryPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
)