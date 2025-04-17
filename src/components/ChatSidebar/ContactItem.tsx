'use client'

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

const ContactItem = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="bg-purple-700">
      <main className="bg-cyan-700 space-y-1">
        {users.map((user) => (
          <div className="bg-green-700 py-5 px-3 flex" key={user._id}>
            <img 
              src={user.image || "/default-avatar.png"} 
              alt={`${user.name}'s avatar`} 
              className="w-10 h-10 rounded-full mr-3"
            />
            <aside className="flex w-full justify-between">
              <div className="w-2/3">
                <h1 className="text-xs font-bold">{user.name}</h1>
                {/* <p className="text-xs font-extralight">{user.email}</p> */}
              </div>
            </aside>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ContactItem;



/**
 * <section className="bg-purple-700">
      <main className="bg-cyan-700 space-y-1">
        {[1, 2, 3, 4, 5].map((contact, index) => (
          <div className="bg-green-700 py-5 px-3 flex" key={index}>
            <img 
              src="/default-avatar.png" 
              alt="User avatar" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <aside className="flex w-full justify-between">
              <div className=" w-2/3">
                <h1 className="text-xs font-bold">Josephin water</h1>
                <p className="text-xs font-extralight">Hi, i am josephin. How...</p>
              </div>
              <div className="text-xs">
                <h2>22/10/19</h2>
                <p className="font-medium">Seen</p>
              </div>
            </aside>
          </div>
        ))}
      </main>
    </section>
 */