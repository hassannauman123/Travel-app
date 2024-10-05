'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';

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
      const res = await fetch('/api/ViewAllCamps', {
        cache: 'no-store', // This ensures no caching in the fetch request
      });
      const data = await res.json();
      setCamps(data);
      setLoading(false);
    };

    fetchCamps();
  }, []); // This empty array ensures the effect runs only once after the initial render

  if (loading) {
    return <p>Loading camps...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Camps</h1>
      <Link href="/post-camp">
        <Button
          type="button"
          title="Post a Camp"
          variant="btn_green"
        />
      </Link>
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
