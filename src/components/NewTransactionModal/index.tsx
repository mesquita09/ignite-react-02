import React, { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransationModal({
	isOpen,
	onRequestClose,
}: NewTransationModalProps) {
	const [type, setType] = useState("deposit");

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button
				type='button'
				onClick={onRequestClose}
				className='react-modal-close'
			>
				<img src={closeImg} alt='fechar' />
			</button>

			<Container>
				<h2>Cadastrar Transação</h2>

				<input placeholder='titulo' />

				<input type='number' placeholder='valor' />

				<TransactionTypeContainer>
					<RadioBox
						type='button'
						onClick={() => {
							setType("deposit");
						}}
						isActive={type === "deposit"}
						activeColor='green'
					>
						<img src={incomeImg} alt='income' />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						type='button'
						onClick={() => {
							setType("withdraw");
						}}
						isActive={type === "withdraw"}
						activeColor='red'
					>
						<img src={outcomeImg} alt='income' />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>

				<input placeholder='categoria' />

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
