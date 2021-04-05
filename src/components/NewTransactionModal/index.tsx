import React, { FormEvent, useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransationModal({
	isOpen,
	onRequestClose,
}: NewTransationModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("");
	const [type, setType] = useState("deposit");

	async function handleCreateNewTransation(event: FormEvent) {
		event.preventDefault();

		await createTransaction({
			title,
			type,
			category,
			amount,
		});

		setTitle("");
		setAmount(0);
		setCategory("");
		setType("deposit");
		onRequestClose();
	}

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

			<Container onSubmit={handleCreateNewTransation}>
				<h2>Cadastrar Transação</h2>

				<input
					placeholder='titulo'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<input
					type='number'
					placeholder='valor'
					value={amount}
					onChange={(event) => setAmount(Number(event.target.value))}
				/>

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

				<input
					placeholder='categoria'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
