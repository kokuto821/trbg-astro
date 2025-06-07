type Props = {
  children: React.ReactNode;
};
export const WholePageWrapper = ({ children }: Props) => {
  return (
    <div className="content">
      <div className="content__grid">{children}</div>
    </div>
  );
};
