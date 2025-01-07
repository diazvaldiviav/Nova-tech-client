export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  // Agrega más tipos según necesites