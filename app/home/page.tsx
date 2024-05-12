"use client";
import { Items } from "@/components/modules/Items";
import ProfileEdit from "@/components/modules/ProfileEdit";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/useAuth";

const Home = () => {
  const { authData } = useAuth();
  console.log("authHome", authData);

  return (
    <main className="bg-black min-h-screen pb-[10%]">
      <div className="w-[75%] mx-auto pt-[5%]">
        <section className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-300 text-lg font-semibold">
              Welcome, {authData?.name}.
            </h3>
            <p className="text-[#A9A69A] text-sm">
              Streamlining your logistics, one shipment at a time.. 🚚
            </p>
          </div>
          <ProfileEdit id={authData?.id} name={authData?.name} />
        </section>
        <Button
          type="button"
          className="bg-[#cbb55d] hover:bg-gray-300 w-full mt-10"
        >
          Get Quote
        </Button>
        <section className="mt-8">
          <h4 className=" text-gray-300 font-semibold text-sm mb-2">
            Items Delivered to Warehouse:
          </h4>
          <Items variant="delivery" />
        </section>
        <section className="mt-8">
          <h4 className=" text-gray-300 font-semibold text-sm mb-2">
            Items Being Tracked:
          </h4>
          <Items variant="tracking" />
        </section>
      </div>
    </main>
  );
};

export default Home;
