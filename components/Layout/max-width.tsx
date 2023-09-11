const MaxWidth = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:max-w-contain mx-auto w-11/12">{children}</div>;
};

export default MaxWidth;
