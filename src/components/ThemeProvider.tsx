import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <div className={theme}>
      <div>{children}</div>
    </div>
  );
};

export default ThemeProvider;
