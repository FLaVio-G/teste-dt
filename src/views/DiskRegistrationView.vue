<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-green-500 p-8 rounded shadow-md w-96">
      <h1 class="text-3xl font-bold text-black mb-6">Cadastro de Cliente</h1>

      <!-- Adiciona uma mensagem de sucesso com v-if -->
      <div v-if="showSuccess" class="mb-4 text-green-500">Cadastro realizado com sucesso!</div>

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-black">Nome do disco:</label>
          <input type="text" ref="name" id="name" name="name" v-model="formData.name" class="w-full p-2 border rounded"
            placeholder="Digite o nome" required>
        </div>
        <div class="mb-4">
          <label for="active" class="block text-sm font-medium text-black">Ativo:</label>
          <select ref="active" id="active" name="active" v-model="formData.active" class="w-full p-2 border rounded"
            required>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <button type="submit"
          class="w-full bg-black text-green-500 p-2 rounded hover:bg-green-600 transition duration-300">Cadastrar</button>
        <router-link to="/menu">
          <button
            class="w-full bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-300 mt-4">Voltar</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccess: false, // Estado para controlar a exibição da mensagem de sucesso
      formData: {
        name: '',
        active: 'sim' // Valor padrão para o campo 'active'
      }
    };
  },
  methods: {
    submitForm() {
      const name = this.formData.name;
      const active = this.formData.active;

      const formData = { name, active };

      const existingData = JSON.parse(localStorage.getItem('clientData')) || [];
      existingData.push(formData);

      localStorage.setItem('clientData', JSON.stringify(existingData));

      // Atualiza o estado para exibir a mensagem de sucesso
      this.showSuccess = true;

      // Limpa os campos do formulário após o envio
      this.formData.name = '';
      this.formData.active = 'sim'; // Pode ajustar para o valor padrão desejado

      // Define um timeout para ocultar a mensagem de sucesso após alguns segundos (opcional)
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // 3000 milissegundos = 3 segundos
    }
  }
};
</script>
