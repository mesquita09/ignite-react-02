import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransationModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
	const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(
		false
	);

	function handleOpenNewTransactionModal() {
		setIsNewTransationModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransationModalOpen(false);
	}

	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransationModal
				isOpen={isNewTransationModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</>
	);
}
