import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
	useEffect(() => {
		api.get("transactions").then((response) => console.log(response.data));
	}, []);

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
