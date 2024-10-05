// app/camps/page.tsx
'use client';
import { useEffect, useState } from 'react';

interface Camp {
  _id: string;
  pic: string;
  title: string;
  description: string;
  rate: number;
  myName: string;
}

const CampsPage = () => {
  const [camps, setCamps] = useState<Camp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCamps = async () => {
      const res = await fetch('/api/ViewAllCamps');
      const data = await res.json();
      setCamps(data);
      setLoading(false);
    };
    
    fetchCamps();
  }, []);

  if (loading) {
    return <p>Loading camps...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Camps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {camps.map((camp) => (
          <div key={camp._id} className="border rounded-lg p-4">
            <img src={camp.pic} alt={camp.title} className="mb-4 w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-bold">{camp.title}</h2>
            <p>{camp.description}</p>
            <p>Rating: {camp.rate}/5</p>
            <p className="text-sm">Posted by: {camp.myName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampsPage;
