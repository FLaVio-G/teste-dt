<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-800">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card 1: Cadastro de Cliente -->
            <div class="bg-blue-500 p-4 rounded-md text-white">
                <h2 class="text-lg font-semibold mb-2">Cadastro de Cliente</h2>
                <p>Registre novos clientes em nosso sistema.</p>
                <button @click="navigateTo('/registroUsuario')"
                    class="mt-4 bg-white text-blue-500 p-2 rounded hover:bg-gray-300 transition duration-300">Ir</button>
            </div>

            <!-- Card 2: Cadastro de Discos -->
            <div class="bg-green-500 p-4 rounded-md text-white">
                <h2 class="text-lg font-semibold mb-2">Cadastro de Discos</h2>
                <p>Adicione novos discos à nossa coleção.</p>
                <button @click="navigateTo('/registroDisco')"
                    class="mt-4 bg-white text-green-500 p-2 rounded hover:bg-gray-300 transition duration-300">Ir</button>
            </div>

            <!-- Card 3: Acessar Dados -->
            <div class="bg-purple-500 p-4 rounded-md text-white">
                <h2 class="text-lg font-semibold mb-2">Acessar Dados</h2>
                <p>Consulte e visualize os dados cadastrados.</p>
                <button @click="navigateTo('/listaDados')"
                    class="mt-4 bg-white text-purple-500 p-2 rounded hover:bg-gray-300 transition duration-300">Ir</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    methods: {
        // Método para navegar para a página específica
        navigateTo(route) {
            this.$router.push(route);
        }
    }
};
</script>
  