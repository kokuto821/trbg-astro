type Props = {
  children: React.ReactNode;
};
export const PerPageWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="space__header"></div>
      <div className="main">{children}</div>
    </>
  );
};
