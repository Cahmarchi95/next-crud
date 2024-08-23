"use client";

import Tabela from "./components/Tabela";
import Botao from "./components/Botao";
import Formulario from "./components/Formulario";
import useCliente from "./hooks/useCliente";
import Layout from "./components/Layout";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela,
  } = useCliente();

  return (
    <div
      className={`
  flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500
  text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelar={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
