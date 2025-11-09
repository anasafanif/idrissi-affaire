import '@/lib/errorReporter';
import '@/lib/i18n';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
const HomePage = lazy(() => import('@/pages/HomePage').then((mod) => ({ default: mod.HomePage })));
const BusinessFinancialPage = lazy(() =>
  import('@/pages/services/BusinessFinancialPage').then((mod) => ({ default: mod.BusinessFinancialPage }))
);
const DigitalGrowthPage = lazy(() =>
  import('@/pages/services/DigitalGrowthPage').then((mod) => ({ default: mod.DigitalGrowthPage }))
);
const InternationalMobilityPage = lazy(() =>
  import('@/pages/services/InternationalMobilityPage').then((mod) => ({ default: mod.InternationalMobilityPage }))
);
const OurStoryPage = lazy(() => import('@/pages/OurStoryPage').then((mod) => ({ default: mod.OurStoryPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then((mod) => ({ default: mod.BlogPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then((mod) => ({ default: mod.BlogPostPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((mod) => ({ default: mod.ContactPage })));
const BookSessionPage = lazy(() => import('@/pages/BookSessionPage').then((mod) => ({ default: mod.BookSessionPage })));

const PageLoader = () => (
  <div className="min-h-[60vh] w-full flex items-center justify-center bg-pattern">
    <div className="h-10 w-10 rounded-full border-4 border-idrissi-gold/80 border-t-transparent animate-spin" />
  </div>
);

const withSuspense = (element: JSX.Element) => <Suspense fallback={<PageLoader />}>{element}</Suspense>;
const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<HomePage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/business-financial",
    element: withSuspense(<BusinessFinancialPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/digital-growth",
    element: withSuspense(<DigitalGrowthPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/international-mobility",
    element: withSuspense(<InternationalMobilityPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/our-story",
    element: withSuspense(<OurStoryPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog",
    element: withSuspense(<BlogPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog/:slug",
    element: withSuspense(<BlogPostPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: withSuspense(<ContactPage />),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/book-session",
    element: withSuspense(<BookSessionPage />),
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