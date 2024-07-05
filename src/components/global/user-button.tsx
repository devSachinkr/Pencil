import {
    LogoutLink,
    useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const UserButton = () => {
  const { user } = useKindeBrowserClient();
  if (!user) return;
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={user.picture!} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex justify-center  flex-col pl-8">
        <p>
          <span className="text-muted-foreground text-sm">Username :</span>{" "}
          {user.given_name}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Email :</span>{" "}
          {user.email}
        </p>
        <LogoutLink>
          <span className="text-sm text-muted-foreground flex items-center gap-x-2 mt-3">
            <LogOut />
            Logout
          </span>
        </LogoutLink>
      </PopoverContent>
    </Popover>
  );
};

export default UserButton;
