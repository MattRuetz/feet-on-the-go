<script>
    import { page } from '$app/stores';
  </script>
  
  <div class="error-container">
    <h1>Page Not Found</h1>
    
    <div class="message">
      <p>We're sorry, but we couldn't find the page you were looking for.</p>
      <p>Would you like to:</p>
      
      <div class="options">
        <a href="/" class="button">Return to Home Page</a>
        <a href="/contact" class="button">Contact Us for Help</a>
      </div>
    </div>
  </div>
  
  <style>
    .error-container {
      text-align: center;
      padding: 2rem;
      margin: 2rem auto;
      max-width: 800px;
    }
  
    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 2rem;
    }
  
    .message {
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 2rem 0;
    }
  
    .options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
      align-items: center;
    }
  
    .button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-size: 1.2rem;
      min-width: 250px;
      transition: background-color 0.2s;
    }
  
    .button:hover {
      background-color: #0056b3;
    }
  
    @media (max-width: 600px) {
      .error-container {
        padding: 1rem;
      }
  
      h1 {
        font-size: 2rem;
      }
  
      .message {
        font-size: 1.1rem;
      }
    }
  </style>