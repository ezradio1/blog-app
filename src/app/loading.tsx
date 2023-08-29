import Loader from '@/assets/SVG/Loader';
import AppLogo from "@/assets/img/app-logo.png";
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="absolute h-screen w-screen inset-0 bg-white z-50 flex justify-center items-center">
      <div className="relative">
        <Loader size="120px" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Image src={AppLogo} alt="app-logo.png" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Loading