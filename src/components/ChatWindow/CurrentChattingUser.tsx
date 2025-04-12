import { Badge } from "@/components/ui/badge";
import {FaVolumeHighIcon} from '@/Icons/Icons'


export default function CurrentChattingUser() {
  return (
    <>
      <section className="bg-blue-500 flex absolute justify-between items-center w-[90%] py-6 m-auto px-10">
        <main>
          {/* <img src="" alt="" /> */}
          <h1>Josephin water</h1>
          <Badge variant="outline" className="bg-red-700">Active</Badge>
        </main>

        
        <main className="bg-red-500 flex justify-between items-center w-1/2">
          <div className="flex gap-2 items-center">
           <FaVolumeHighIcon />
           <FaVolumeHighIcon />
          </div>
          <div className="flex gap-2 items-center">
          <FaVolumeHighIcon />
          <FaVolumeHighIcon />
          <FaVolumeHighIcon />
          <FaVolumeHighIcon />
          </div>
        </main>
      </section>
    </>
  );
}
