<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-white p-8 rounded-md shadow-md w-full">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Lista de dados</h1>

      <!-- Tabela de Clientes -->
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border-b">Cliente</th>
            <th class="py-2 px-4 border-b">Documento</th>
            <th class="py-2 px-4 border-b">Telefone</th>
            <th class="py-2 px-4 border-b">E-mail</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Produtos</th>
            <th class="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop para exibir clientes -->
          <tr v-for="cliente in clientes.clientes" :key="cliente.name">
            <td class="py-2 px-4 border-b">{{ cliente.name }}</td>
            <td class="py-2 px-4 border-b">{{ cliente.document }}</td>
            <td class="py-2 px-4 border-b">{{ cliente.phone }}</td>
            <td class="py-2 px-4 border-b">{{ cliente.email }}</td>
            <td class="py-2 px-4 border-b">{{ cliente.active ? 'Ativo' : 'Inativo' }}</td>
            <td class="py-2 px-4 border-b">{{ cliente.produtos ? cliente.produtos.join(', ') : '' }}</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
              <button class="text-green-500 hover:text-green-700">Associar Produtos</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Tabela de Produtos -->
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Produtos Cadastrados</h2>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border-b">Produto</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop para exibir produtos -->
          <tr v-for="produto in produtos" :key="produto.nome">
            <td class="py-2 px-4 border-b">{{ produto.nome }}</td>
            <td class="py-2 px-4 border-b">{{ produto.status }}</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Botão de Voltar -->
      <router-link to="/menu">
        <button class="w-full bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-300 mt-4">
          Voltar
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Carrega os clientes do Local Storage ou utiliza um array vazio se não houver dados no Local Storage
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    // Carrega os produtos do Local Storage ou utiliza um array vazio se não houver dados no Local Storage
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    console.log('Clientes no Local Storage:', localStorage.getItem('clientes'));


    console.log('Clientes no Local Storage:', clientes);
    console.log('Produtos no Local Storage:', produtos);

    return {
      clientes: clientes,
      produtos: produtos
    };
  },
  // Outra lógica do componente...
};
</script>

<style scoped>
/* Adicione estilos globais ou específicos para este componente, se necessário */
</style>
