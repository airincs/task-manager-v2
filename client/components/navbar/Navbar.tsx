import React, { FC } from "react";
import NavbarItems from "./NavbarItems";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <div className="h-12 w-full bg-neutral-900 bg-opacity-60 sticky top-0 flex justify-around z-10">
      <div className="text-center text-sm md:text-md flex justify-around items-center gap-5 md:gap-10 mx-4 md:mx-0">
        <NavbarItems
          title="Tasks"
          source={"/"}
          headerFlag={router.pathname == "/" ? true : false}
        />
      </div>
    </div>
  );
};

export default Navbar;
