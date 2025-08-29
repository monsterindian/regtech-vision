// API service for backend communication
// This simulates what would be a real backend API call

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export const submitDemoRequest = async (formData: any): Promise<ApiResponse> => {
  try {
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${API_BASE_URL}/api/demo-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    console.log('✅ Demo request submitted successfully:', {
      requestId: result.data?.requestId,
      emailId: result.data?.emailId,
      timestamp: new Date().toISOString()
    });

    return result;

  } catch (error) {
    console.error('❌ API Error:', error);
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Unable to connect to server. Please check if the backend is running.'
      };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit request'
    };
  }
};
