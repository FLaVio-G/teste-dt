<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
        <div class="bg-green-500 p-8 rounded shadow-md w-96">
            <h1 class="text-3xl font-bold text-black mb-6">Cadastro de Cliente</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-black">Nome:</label>
                    <input type="text" id="name" ref="name" name="name" class="w-full p-2 border rounded"
                        placeholder="Digite o nome" required>
                </div>
                <div class="mb-4">
                    <label for="document" class="block text-sm font-medium text-black">Documento:</label>
                    <input type="text" id="document" ref="document" name="document" class="w-full p-2 border rounded"
                        placeholder="Digite o documento" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-black">Telefone:</label>
                    <input type="tel" id="phone" ref="phone" name="phone" class="w-full p-2 border rounded"
                        placeholder="Digite o telefone" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-black">E-mail:</label>
                    <input type="email" id="email" ref="email" name="email" class="w-full p-2 border rounded"
                        placeholder="Digite o e-mail" required>
                </div>
                <div class="mb-4">
                    <label for="active" class="block text-sm font-medium text-black">Ativo:</label>
                    <select id="active" ref="active" name="active" class="w-full p-2 border rounded" required>
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
    methods: {
        submitForm() {
            const newClient = {
                name: this.$refs.name.value,
                document: this.$refs.document.value,
                phone: this.$refs.phone.value,
                email: this.$refs.email.value,
                active: this.$refs.active.value === 'sim' ? true : false,
            };

            // Recupera os clientes existentes do localStorage
            const existingClients = JSON.parse(localStorage.getItem('clientes')) || { clientes: [] };

            // Adiciona o novo cliente ao array
            existingClients.clientes.push(newClient);

            // Atualiza o localStorage
            localStorage.setItem('clientes', JSON.stringify(existingClients));

            console.log('Clientes atualizados:', existingClients.clientes);

            // Limpa os campos do formulário após o cadastro
            this.clearFormFields();

            console.log('Formulário enviado!', newClient);
        },
        clearFormFields() {
            // Limpa os campos do formulário após o cadastro
            this.$refs.name.value = '';
            this.$refs.document.value = '';
            this.$refs.phone.value = '';
            this.$refs.email.value = '';
            this.$refs.active.value = 'sim'; // Define o valor padrão para 'Sim'
        },
    },
};
</script>
  