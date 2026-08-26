import { useEffect, useState } from "react";
import Footer from "./Footer";
import CommunityJoinModal from "./CommunityModal";

export default function AppLayout({ header, children }) {
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  useEffect(() => {
    const hasSeenCommunityModal = localStorage.getItem(
      "100genius-community-modal-seen"
    );

    if (hasSeenCommunityModal) return;

    const timer = setTimeout(() => {
      setShowCommunityModal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseCommunityModal = () => {
    setShowCommunityModal(false);

    localStorage.setItem(
      "100genius-community-modal-seen",
      "true"
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      {header}

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <CommunityJoinModal
        open={showCommunityModal}
        onClose={handleCloseCommunityModal}
      />
    </div>
  );
}