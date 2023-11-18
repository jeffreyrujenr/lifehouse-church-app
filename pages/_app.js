import { AuthContextProvider } from "@/context/AuthContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </AuthContextProvider>
  );
}
