import React, { useState } from 'react';

// Main App component for the blog posting form
const App = () => {
  // State variables to hold the form data
  const [blogName, setBlogName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [relatedExperience, setRelatedExperience] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Log the form data to the console
    console.log('Form Submitted!', {
      blogName,
      authorName,
      relatedExperience,
    });

    // You can add your logic here to send the data to a backend API
    // For example, using fetch or axios:
    // fetch('/api/blog-posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ blogName, authorName, relatedExperience }),
    // });
  };

  return (
    // The main container for the entire form, centered on the screen
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* The form card with a white background, shadow, and rounded corners */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Title for the form */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Blog Post</h2>
        
        {/* The form element itself */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Name input field */}
          <div>
            <label htmlFor="blogName" className="block text-sm font-medium text-gray-700 mb-1">
              Blog Name
            </label>
            <input
              type="text"
              id="blogName"
              name="blogName"
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter the title of your blog post"
              required
            />
          </div>

          {/* Author Name input field */}
          <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Your name"
              required
            />
          </div>

          {/* Related Experience textarea field */}
          <div>
            <label htmlFor="relatedExperience" className="block text-sm font-medium text-gray-700 mb-1">
              Related Experience
            </label>
            <textarea
              id="relatedExperience"
              name="relatedExperience"
              rows="5"
              value={relatedExperience}
              onChange={(e) => setRelatedExperience(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Describe your experience related to this blog post"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Submit Blog Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
