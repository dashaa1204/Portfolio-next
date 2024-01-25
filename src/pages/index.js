import { Portfolio } from "@/components/Portfolio";
import { CloseProvider } from "@/context/CloseContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <CloseProvider>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </CloseProvider>
  );
}
