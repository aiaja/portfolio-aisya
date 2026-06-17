const V2Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="theme-v2 antialiased min-h-screen">
      {children}
    </div>
  );
};

export default V2Layout;
