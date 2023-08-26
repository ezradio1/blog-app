import { ContainerProps } from "./index.types";

const Container = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[95vw] md:max-w-[95vw] xl:max-w-[1278px] 2xl:max-w-[1330px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
