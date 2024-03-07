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
            <th class="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          <!-- Cliente 1 -->
          <tr>
            <td class="py-2 px-4 border-b">Cliente A</td>
            <td class="py-2 px-4 border-b">123456789</td>
            <td class="py-2 px-4 border-b">987654321</td>
            <td class="py-2 px-4 border-b">clienteA@example.com</td>
            <td class="py-2 px-4 border-b">Ativo</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
              <button class="text-green-500 hover:text-green-700">Associar Produtos</button>
            </td>
          </tr>

          <!-- Cliente 2 -->
          <tr>
            <td class="py-2 px-4 border-b">Cliente B</td>
            <td class="py-2 px-4 border-b">987654321</td>
            <td class="py-2 px-4 border-b">123456789</td>
            <td class="py-2 px-4 border-b">clienteB@example.com</td>
            <td class="py-2 px-4 border-b">Ativo</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
              <button class="text-green-500 hover:text-green-700">Associar Produtos</button>
            </td>
          </tr>

          <!-- ... (adicionar mais clientes conforme necessário) ... -->

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
          <!-- Produto 1 -->
          <tr>
            <td class="py-2 px-4 border-b">Disco 1</td>
            <td class="py-2 px-4 border-b">Ativo</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
            </td>
          </tr>

          <!-- Produto 2 -->
          <tr>
            <td class="py-2 px-4 border-b">Disco 2</td>
            <td class="py-2 px-4 border-b">Ativo</td>
            <td class="py-2 px-4 border-b">
              <button class="text-blue-500 hover:text-blue-700 mr-2">Editar</button>
              <button class="text-red-500 hover:text-red-700">Inativar</button>
            </td>
          </tr>

          <!-- ... (adicionar mais produtos conforme necessário) ... -->

        </tbody>
      </table>

      <!-- Botão de Voltar -->
      <router-link to="/menu">
        <button
          class="w-full bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-300 mt-4">Voltar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // Se houver necessidade de adicionar lógica ou dados dinâmicos, faça isso aqui
};
</script>

<style scoped>
/* Adicione estilos globais ou específicos para este componente, se necessário */
</style>
