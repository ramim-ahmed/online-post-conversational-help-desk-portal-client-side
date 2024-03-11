import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Profile() {
  return (
    <div className="flex items-center space-x-2">
      <Avatar className="w-9 h-9">
        <AvatarImage src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/66832900_919839561682274_5874078564302716928_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA1kC2Pj_VdrJRG-wlGTjjX8tiHC6sOvFfy2IcLqw68RePnJQ4eRS2d8o6BSkvaAasrbROdVnRUvAe4NDPvdBq&_nc_ohc=8SvsRK4CQ_EAX-dU6b3&_nc_ht=scontent.fdac5-1.fna&cb_e2o_trans=q&oh=00_AfDn3ZzcSlJ1OmP-E5wu1LcL2GgXdA9iSXow5ch6bw_okg&oe=66165738" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p>Hi, User</p>
      </div>
    </div>
  );
}
