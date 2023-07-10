import { NextResponse } from 'next/server';

type ErrorResponse = {
  code: string;
  message: string;
};

type ErrorResponseBody = {
  error:
    | {
        issues?: ErrorResponse[];
      }
    | string;
};

type SuccessResponseBody<T = unknown> = {
  body?: T;
};

type ResponseOptions = {
  status?: number;
  headers?: Record<string, string>;
};

class Response {
  static error(issues: ErrorResponse[], status = 204): NextResponse {
    const body: ErrorResponseBody = { error: { issues } };
    const headers = { 'content-type': 'application/problem+json' };
    return NextResponse.json(body, { status, headers });
  }

  static serverError(errorMessage: string): NextResponse {
    const body: ErrorResponseBody = {
      error: { issues: [{ code: 'internal_server_error', message: errorMessage }] },
    };
    const headers = { 'content-type': 'application/problem+json' };
    return NextResponse.json(body, { status: 500, headers });
  }

  static success(status = 201): NextResponse {
    const headers = { 'content-type': 'application/problem+json' };
    return NextResponse.json({}, { status, headers });
  }

  static successWithData<T>(data: T, status = 200): NextResponse {
    const body: SuccessResponseBody<T> = { body: data };
    const headers = { 'content-type': 'application/json' };
    return NextResponse.json(body, { status, headers });
  }

  static unauthorized(message = 'Unauthorized'): NextResponse {
    const body: ErrorResponseBody = { error: 'Unauthorized' };
    const headers = { 'content-type': 'application/problem+json' };
    return NextResponse.json(body, { status: 401, headers });
  }
}

export default Response;
