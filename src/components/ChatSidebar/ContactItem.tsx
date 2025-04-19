'use client'

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface ContactItemProps {
  onSelectUser: (user: User) => void;
  selectedUser: User | null;
}

const ContactItem = ({ onSelectUser, selectedUser }: ContactItemProps) => {
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

  // selectedUser

  return (
    <section className="mt-5">
      <main className=" h-[700px] mr-1 overflow-y-auto space-y-1">
        {users.map((user) => (
          <div 
            className={`py-5 px-3 rounded-r-sm flex cursor-pointer transition-colors ${
              selectedUser?._id === user._id ? 'bg-[#aacbdf] border-l-5 border-[#0d91dd]' : 'bg-green-700 hover:bg-green-600'
            }`}
            key={user._id}
            onClick={() => onSelectUser(user)}
          >
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
