import Dashboard from "./components/Dashboard";
import { ChartProvider } from "./context/ChartContext";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChartProvider>
      <ChatProvider>
        <Dashboard />
      </ChatProvider>
    </ChartProvider>
  );
}

export default App;
