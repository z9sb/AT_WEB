import "./styles.scss";
import Index from "./routes/index.tsx";
import AppProvider from "./Context.tsx";

export default function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
}
