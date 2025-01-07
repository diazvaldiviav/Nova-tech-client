export interface IValidationError {
    errors: {
      [key: string]: string[];
    };
    status: number;
    traceId: string;
  }