import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

export default function CreatePost() {
  return (
    <div className="cursor-pointer bg-white border p-6">
      <div className="flex items-center space-x-3">
        <Avatar className="">
          <AvatarImage src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/66832900_919839561682274_5874078564302716928_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA1kC2Pj_VdrJRG-wlGTjjX8tiHC6sOvFfy2IcLqw68RePnJQ4eRS2d8o6BSkvaAasrbROdVnRUvAe4NDPvdBq&_nc_ohc=8SvsRK4CQ_EAX-dU6b3&_nc_ht=scontent.fdac5-1.fna&cb_e2o_trans=q&oh=00_AfDn3ZzcSlJ1OmP-E5wu1LcL2GgXdA9iSXow5ch6bw_okg&oe=66165738" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>Share and ask something to everyone ?</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p>photo/video</p>
        </div>
        <div>
          <Button>Create Post</Button>
        </div>
      </div>
    </div>
  );
}
