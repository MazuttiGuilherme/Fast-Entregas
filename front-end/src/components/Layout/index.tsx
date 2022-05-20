import {Header} from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
      <p>Footer</p>
    </>
  );
};
