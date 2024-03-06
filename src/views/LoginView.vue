<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-green-500 p-8 rounded shadow-md w-96">
      <h1 class="text-3xl font-bold text-black mb-6">Login</h1>
      <form @submit.prevent="$router.push('/menu')">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-black">Usuário:</label>
          <input type="text" id="username" name="username" class="w-full p-2 border rounded"
            placeholder="Digite seu usuário" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-black">Senha:</label>
          <input type="password" id="password" name="password" class="w-full p-2 border rounded"
            placeholder="Digite sua senha" required>
        </div>
        <button type="submit"
          class="w-full bg-black text-green-500 p-2 rounded hover:bg-green-600 transition duration-300">Entrar</button>
      </form>
    </div>
  </div>
</template>