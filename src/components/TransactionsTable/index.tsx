import React from "react";
import { Container } from "./styles";

export function TransactionsTable() {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>testes</td>
						<td className='deposit'>120,00</td>
						<td>criacao</td>
						<td>16/03/2021</td>
					</tr>
					<tr>
						<td>testes</td>
						<td className='withdraw'>120,00</td>
						<td>criacao</td>
						<td>16/03/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
