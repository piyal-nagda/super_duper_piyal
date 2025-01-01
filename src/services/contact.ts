interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL;

export const submitContactForm = async (data: ContactForm): Promise<{ success: boolean; message: string }> => {
  if (!FORM_URL) {
    console.error('Contact form URL not configured');
    return { 
      success: false, 
      message: 'Contact form not properly configured. Please try again later.' 
    };
  }

  try {
    // Ensure URL is properly formatted
    const url = new URL(FORM_URL);
    
    // Format data for Google Sheets
    const formData = new URLSearchParams();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    
    const response = await fetch(url.toString(), {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    return { 
      success: true, 
      message: 'Message sent successfully! I will get back to you soon.' 
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or contact me directly via email.' 
    };
  }
};