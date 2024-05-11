import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-black ">
      <Card className="w-[20rem] bg-[#32312C] text-white border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Login</CardTitle>
          <CardDescription className="text-[#A9A69A]">
            Sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-gray-300 ">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 text-white placeholder-gray-500 border-none text-xs"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-gray-300 ">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-900 text-white placeholder-gray-500 focus:border-1 border-none"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="">
          <Button className="bg-[#A9A69A] hover:bg-gray-500 w-full">
            Login
          </Button>{" "}
        </CardFooter>
      </Card>
    </main>
  );
}
