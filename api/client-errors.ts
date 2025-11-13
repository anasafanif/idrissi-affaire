type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  setHeader: (name: string, value: string) => void;
  send: (body: string) => void;
};

function baseResponse(res: VercelResponse, status: number, body: unknown) {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).send(JSON.stringify(body));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return baseResponse(res, 405, { success: false, error: 'Method not allowed' });
  }

  try {
    // In production, we can log errors or send them to an error tracking service
    // For now, we'll just accept them and return success
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    
    // Optionally log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Client Error Report]', payload);
    }

    // Return success to prevent error loops
    return baseResponse(res, 200, { success: true });
  } catch (error) {
    // Fail silently to prevent error loops
    return baseResponse(res, 200, { success: true });
  }
}

