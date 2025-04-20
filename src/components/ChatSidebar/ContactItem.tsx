'use client'

import { useEffect, useState } from 'react';
import { useColors } from '@/context/ColorContext';

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
  const {primaryColor} = useColors();

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
    <section className="flex-1 overflow-hidden">
      <main className="h-full overflow-y-auto pr-1">
        {users.map((user) => (
          <div 
            className={`py-5 px-3 rounded-r-sm flex cursor-pointer transition-colors`}
            key={user._id}
            onClick={() => onSelectUser(user)}
            style={selectedUser?._id === user._id ? {borderLeft: `5px solid ${primaryColor.primary}`, backgroundColor: primaryColor.light} : {backgroundColor: primaryColor.light}}
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
