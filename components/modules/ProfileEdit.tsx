import { Button } from "@/components/ui//button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfileEdit = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <span className="text-gray-300 me-2 text-sm cursor-pointer">
            Edit Profile
          </span>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src="/avatar.jpg"
              alt="user image"
              width={40}
              height={40}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[25rem] bg-black border-[#A9A69A]-500">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-300">
            Edit profile
          </DialogTitle>
          <DialogDescription className="text-[#A9A69A]">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 mb-8">
          <div>
            <Label htmlFor="name" className="text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              className="bg-gray-700 text-white placeholder-gray-500 border-none text-xs"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="bg-gray-700 text-white placeholder-gray-500 border-none text-xs"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-[#cbb55d] hover:bg-gray-300 w-full"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEdit;
