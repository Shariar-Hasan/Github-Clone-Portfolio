
import { GitHubUser } from "@/types/propsTypes";
import Image from "next/image";
import SideNav from "../Layers/SideNav";

const AvaterButton = ({
  userData,
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  userData: GitHubUser;
  isSidebarOpen: boolean;
  setIsSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { avatar_url, login, name } = userData;
  return (
    <div className="flex items-center">
      <button onClick={() => setIsSidebarOpen(true)}>
      <span className="sr-only">Side Menu Open Button with Avater Icon</span>
        <Image
          width={200}
          height={200}
          className="w-[30px] aspect-square rounded-full"
          src={avatar_url}
          alt={login}
        />
      </button>
      <SideNav
        avatar_url={avatar_url}
        login={login}
        name={name}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default AvaterButton;
