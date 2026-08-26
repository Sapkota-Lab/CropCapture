import { useState } from "react";

import Navbar from "./components/Navbar";
import FieldEntryPage from "./pages/FieldEntryPage";
import QueryPage from "./pages/QueryPage";

const VIEWS = {
  FIELD_ENTRY: "field-entry",
  QUERY: "query"
};

export default function App() {
  const [activeView, setActiveView] = useState(VIEWS.FIELD_ENTRY);

  return (
    <div className="app-shell">
      <Navbar activeView={activeView} onNavigate={setActiveView} views={VIEWS} />
      <main className="page-content">
        {activeView === VIEWS.FIELD_ENTRY ? <FieldEntryPage /> : <QueryPage />}
      </main>
    </div>
  );
}
