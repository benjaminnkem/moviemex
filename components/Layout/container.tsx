interface ContainerProps {
  children: React.ReactNode;
}

const GeneralContainer = ({ children }: ContainerProps) => {
  return <div className="md:max-w-[1488px] mx-auto w-11/12">{children}</div>;
};

export default GeneralContainer;
