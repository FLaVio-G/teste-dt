<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="bg-white p-8 rounded-md shadow-md w-full">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Lista de Clientes e Discos Associados</h1>

      <!-- Tabela de Clientes -->
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border-b">Cliente</th>
            <th class="py-2 px-4 border-b">Documento</th>
            <th class="py-2 px-4 border-b">Telefone</th>
            <th class="py-2 px-4 border-b">E-mail</th>
            <th class="py-2 px-4 border-b">Discos Associados</th>
          </tr>
        </thead>
        <tbody>
          <!-- Cliente 1 com Discos Associados -->
          <tr>
            <td class="py-2 px-4 border-b">Cliente A</td>
            <td class="py-2 px-4 border-b">123456789</td>
            <td class="py-2 px-4 border-b">987654321</td>
            <td class="py-2 px-4 border-b">clienteA@example.com</td>
            <td class="py-2 px-4 border-b">
              <ul class="list-disc pl-4">
                <li>Disco 1</li>
                <li>Disco 2</li>
              </ul>
            </td>
          </tr>

          <!-- Cliente 2 sem Discos Associados -->
          <tr>
            <td class="py-2 px-4 border-b">Cliente B</td>
            <td class="py-2 px-4 border-b">987654321</td>
            <td class="py-2 px-4 border-b">123456789</td>
            <td class="py-2 px-4 border-b">clienteB@example.com</td>
            <td class="py-2 px-4 border-b">Nenhum Disco Associado</td>
          </tr>

          <!-- Cliente 3 com Discos Associados -->
          <tr>
            <td class="py-2 px-4 border-b">Cliente C</td>
            <td class="py-2 px-4 border-b">555555555</td>
            <td class="py-2 px-4 border-b">666666666</td>
            <td class="py-2 px-4 border-b">clienteC@example.com</td>
            <td class="py-2 px-4 border-b">
              <ul class="list-disc pl-4">
                <li>Disco 3</li>
                <li>Disco 4</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
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
