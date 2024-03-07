<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
        <div class="bg-green-500 p-8 rounded shadow-md w-96">
            <h1 class="text-3xl font-bold text-black mb-6">Cadastro de Cliente</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-black">Nome:</label>
                    <input type="text" id="name" name="name" class="w-full p-2 border rounded" placeholder="Digite o nome"
                        required>
                </div>
                <div class="mb-4">
                    <label for="document" class="block text-sm font-medium text-black">Documento:</label>
                    <input type="text" id="document" name="document" class="w-full p-2 border rounded"
                        placeholder="Digite o documento" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-black">Telefone:</label>
                    <input type="tel" id="phone" name="phone" class="w-full p-2 border rounded"
                        placeholder="Digite o telefone" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-black">E-mail:</label>
                    <input type="email" id="email" name="email" class="w-full p-2 border rounded"
                        placeholder="Digite o e-mail" required>
                </div>
                <div class="mb-4">
                    <label for="active" class="block text-sm font-medium text-black">Ativo:</label>
                    <select id="active" name="active" class="w-full p-2 border rounded" required>
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
            // Adicione lógica para lidar com o envio do formulário aqui
            // Você pode acessar os valores dos campos usando o this.$refs ou outra técnica
            console.log('Formulário enviado!');
        }
    }
};
</script>
  