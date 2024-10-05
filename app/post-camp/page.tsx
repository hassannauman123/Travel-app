// Add this at the top of the file
// travel-app/app/post-camp/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostCamp = () => {
  const [formData, setFormData] = useState({
    pic: '',
    title: '',
    description: '',
    rate: 0,
    myName: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Now this should work

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/PostCamp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to the camps page after a successful post
        router.push('/camps');
      } else {
        console.error('Failed to post camp');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Post a New Camp</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder=" 'Copy image Adress' from Google and Paste here"
          value={formData.pic}
          onChange={(e) => setFormData({ ...formData, pic: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Camp Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Rate (out of 5)"
          value={formData.rate}
          onChange={(e) => setFormData({ ...formData, rate: Number(e.target.value) })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          value={formData.myName}
          onChange={(e) => setFormData({ ...formData, myName: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {loading ? 'Posting...' : 'Post Camp'}
        </button>
      </form>
    </div>
  );
};

export default PostCamp;
