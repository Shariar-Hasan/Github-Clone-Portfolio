
const SingleRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl w-full mx-auto my-10">
      {children}
    </main>
  );
};

export default SingleRouteLayout;
