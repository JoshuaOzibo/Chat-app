import { Badge } from "@/components/ui/badge";
import { FaVolumeHighIcon } from "@/Icons/Icons";
import {
  FiSearchIcon,
  IoCallOutlineIcon,
  MdOutlineVideocamIcon,
  AiOutlineAppstoreIcon,
  CiMenuKebabIcon,
} from "@/Icons/Icons";
import Button from "@/components/ui/customUi/button";
import { useSidebar } from "@/context/SidebarContext";

interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
}

interface CurrentChattingUserProps {
  user: User;
}

const CurrentChattingUser = ({ user }: CurrentChattingUserProps) => {
  const { toggleRightBar } = useSidebar();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked in CurrentChattingUser');
    toggleRightBar();
  };

  return (
    <>
      <section className="bg-blue-500 flex space-x-5 absolute items-center lg:w-[70%] w-[90%] py-6 px-10 top-5 left-1/2 -translate-x-1/2">
        <main className="flex items-center gap-3">
          {/* <img src="" alt="" /> */}
          <img className="w-[50px] border h-[50px] rounded-full" src={user.image} alt="img src" />
          <div>
          <h1 className="font-medium text-sm">{user.name}</h1>
          <Badge variant="outline" className="bg-red-700 -py-2">
            Active
          </Badge>
          </div>
        </main>

        <div className="h-8 w-[1px] bg-gray-300/50" />

        <main className="flex justify-between items-center flex-1">
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              className="bg-[#ffdac5] p-[5px] rounded-full"
              value={<FaVolumeHighIcon />}
            />
            <Button
              type="button"
              className="bg-[#ffdac5] p-[5px] rounded-full"
              value={<FiSearchIcon />}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              className="bg-[#ffdac5] p-[5px] rounded-full"
              value={<IoCallOutlineIcon />}
            />
            <Button
              type="button"
              className="bg-[#ffdac5] p-[5px] rounded-full"
              value={<MdOutlineVideocamIcon />}
            />
            <Button
              type="button"
              className="bg-[#ffdac5] cursor-pointer p-[5px] rounded-full"
              value={<AiOutlineAppstoreIcon />}
              onClick={handleClick}
            />
            <Button
              type="button"
              className="hover:bg-[#ffdac5] p-[5px] rounded-full"
              value={<CiMenuKebabIcon />}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default CurrentChattingUser;
