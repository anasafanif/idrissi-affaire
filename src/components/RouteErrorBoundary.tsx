import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { useEffect } from 'react';
import { errorReporter } from '@/lib/errorReporter';
import { ErrorFallback } from './ErrorFallback';

export function RouteErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    // Report the route error (fail silently if reporting fails)
    if (error) {
      try {
        let errorMessage = 'Unknown route error';
        let errorStack = '';

        if (isRouteErrorResponse(error)) {
          errorMessage = `Route Error ${error.status}: ${error.statusText}`;
          if (error.data) {
            try {
              errorMessage += ` - ${JSON.stringify(error.data)}`;
            } catch {
              // Ignore JSON.stringify errors
            }
          }
        } else if (error instanceof Error) {
          errorMessage = error.message;
          errorStack = error.stack || '';
        } else if (typeof error === 'string') {
          errorMessage = error;
        } else {
          try {
            errorMessage = JSON.stringify(error);
          } catch {
            errorMessage = String(error);
          }
        }

        errorReporter.report({
          message: errorMessage,
          stack: errorStack,
          url: window.location.href,
          timestamp: new Date().toISOString(),
          source: 'react-router',
          error: error,
          level: "error",
        });
      } catch (reportError) {
        // Fail completely silently - don't throw errors from error reporting
        // This prevents infinite error loops
      }
    }
  }, [error]);

  // Render error UI using shared ErrorFallback component
  if (isRouteErrorResponse(error)) {
    return (
      <ErrorFallback
        title={`${error.status} ${error.statusText}`}
        message="Sorry, an error occurred while loading this page."
        error={error.data ? { message: JSON.stringify(error.data, null, 2) } : error}
        statusMessage="Navigation error detected"
      />
    );
  }

  return (
    <ErrorFallback
      title="Unexpected Error"
      message="An unexpected error occurred while loading this page."
      error={error}
      statusMessage="Routing error detected"
    />
  );
}