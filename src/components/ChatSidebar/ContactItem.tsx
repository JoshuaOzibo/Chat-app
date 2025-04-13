const ContactItem = () => {
  return (
    <section className="bg-purple-700">
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
  );
};

export default ContactItem;
