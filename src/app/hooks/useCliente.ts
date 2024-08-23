import { useState, useEffect } from "react";
import Cliente from "./../core/Cliente";
import ClienteRepositorio from "./../core/ClienteRepositorio";
import ColecaoCliente from "./../firebase/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useCliente() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, exibirForm, exibirTabela } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirForm();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    exibirForm();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela,
  };
}
